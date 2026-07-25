from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from database import db

from models.business_input import BusinessInput
from models.carbon import CarbonRecord
from models.company import Company

from services.carbon_service import CarbonCalculator


carbon_bp = Blueprint("carbon", __name__)


# Add Carbon Data + Calculate Emission 

@carbon_bp.route("/", methods=["POST"])
@jwt_required()
def add_carbon_data():

    try:

        user_id = get_jwt_identity()

        data = request.get_json()

        company = Company.query.filter_by(user_id=user_id).first()

        if not company:
            return jsonify({
                "success": False,
                "message": "Company not found"
            }), 404

        #  Save raw input 

        business_input = BusinessInput(
            company_id=company.id,
            electricity_kwh=data.get("electricity_kwh", 0),
            fuel_liters=data.get("fuel_liters", 0),
            transport_distance=data.get("transport_distance", 0),
            waste_kg=data.get("waste_kg", 0)
        )

        db.session.add(business_input)
        db.session.commit()

        # Calculate Carbon 

        result = CarbonCalculator.calculate(
            business_input.electricity_kwh,
            business_input.fuel_liters,
            business_input.transport_distance,
            business_input.waste_kg
        )

        # Save Carbon Result 

        carbon_record = CarbonRecord(
            company_id=company.id,
            electricity_kwh=business_input.electricity_kwh,
            fuel_liters=business_input.fuel_liters,
            transport_distance=business_input.transport_distance,
            waste_kg=business_input.waste_kg,
            total_emission=result["total_emission"]
        )

        db.session.add(carbon_record)
        db.session.commit()

        return jsonify({
            "success": True,
            "message": "Carbon data processed successfully",
            "data": result
        }), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


# Get Carbon History 

@carbon_bp.route("/", methods=["GET"])
@jwt_required()
def get_carbon_history():

    try:

        user_id = get_jwt_identity()

        company = Company.query.filter_by(user_id=user_id).first()

        if not company:
            return jsonify({
                "success": False,
                "message": "Company not found"
            }), 404

        records = CarbonRecord.query.filter_by(
            company_id=company.id
        ).order_by(
            CarbonRecord.created_at.desc()
        ).all()

        return jsonify({
            "success": True,
            "data": [
                {
                    "id": r.id,
                    "electricity_kwh": r.electricity_kwh,
                    "fuel_liters": r.fuel_liters,
                    "transport_distance": r.transport_distance,
                    "waste_kg": r.waste_kg,
                    "total_emission": r.total_emission,
                    "created_at": r.created_at
                }
                for r in records
            ]
        }), 200

    except Exception as e:
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500
    
# Get Carbon History

@carbon_bp.route("/", methods=["GET"])
@jwt_required()
def get_carbon_records():

    user_id = get_jwt_identity()

    company = Company.query.filter_by(
        user_id=user_id
    ).first()

    if not company:

        return jsonify({
            "success": False,
            "message": "Company not found"
        }), 404

    records = CarbonRecord.query.filter_by(
        company_id=company.id
    ).order_by(
        CarbonRecord.created_at.desc()
    ).all()

    data = []

    for record in records:

        data.append({

            "id": record.id,
            "electricity_kwh": record.electricity_kwh,
            "fuel_liters": record.fuel_liters,
            "transport_distance": record.transport_distance,
            "waste_kg": record.waste_kg,
            "total_emission": record.total_emission,
            "created_at": record.created_at

        })

    return jsonify({

        "success": True,
        "data": data

    }), 200