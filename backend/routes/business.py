from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from services.carbon_service import CarbonCalculator
from models.carbon import CarbonRecord

from database import db

from models.business_input import BusinessInput
from models.company import Company

business_bp = Blueprint("business", __name__)


# Create Business Input

@business_bp.route("/", methods=["POST"])
@jwt_required()
def create_business():

    try:

        user_id = get_jwt_identity()

        data = request.get_json()

        company = Company.query.filter_by(
            user_id=user_id
        ).first()

        if not company:

            return jsonify({
                "success": False,
                "message": "Company not found"
            }), 404

        business = BusinessInput(

            company_id=company.id,

            reporting_year=data["reporting_year"],
            reporting_month=data["reporting_month"],

            grid_electricity_kwh=data.get("grid_electricity_kwh", 0),
            renewable_electricity_kwh=data.get("renewable_electricity_kwh", 0),

            diesel_liters=data.get("diesel_liters", 0),
            petrol_liters=data.get("petrol_liters", 0),
            lpg_kg=data.get("lpg_kg", 0),
            natural_gas_m3=data.get("natural_gas_m3", 0),

            business_travel_km=data.get("business_travel_km", 0),
            employee_travel_km=data.get("employee_travel_km", 0),
            freight_transport_km=data.get("freight_transport_km", 0),

            general_waste_kg=data.get("general_waste_kg", 0),
            recycled_waste_kg=data.get("recycled_waste_kg", 0),
            hazardous_waste_kg=data.get("hazardous_waste_kg", 0),

            total_carbon=0

        )

        db.session.add(business)
        db.session.flush()

        result = CarbonCalculator.calculate(
            business
        )

        carbon = CarbonRecord(

            company_id=company.id,

            business_input_id=business.id,

            scope1=result["scope1"],
            scope2=result["scope2"],
            scope3=result["scope3"],

            total_emission=result["total_emission"]

        )

        db.session.add(carbon)

        business.total_carbon = result["total_emission"]

        db.session.commit()

        return jsonify({

            "success": True,
            "message": "Business data saved successfully",

            "data": {

                "id": business.id,
                "company_id": business.company_id,

                "reporting_year": business.reporting_year,
                "reporting_month": business.reporting_month,

                "grid_electricity_kwh": business.grid_electricity_kwh,
                "renewable_electricity_kwh": business.renewable_electricity_kwh,

                "diesel_liters": business.diesel_liters,
                "petrol_liters": business.petrol_liters,
                "lpg_kg": business.lpg_kg,
                "natural_gas_m3": business.natural_gas_m3,

                "business_travel_km": business.business_travel_km,
                "employee_travel_km": business.employee_travel_km,
                "freight_transport_km": business.freight_transport_km,

                "general_waste_kg": business.general_waste_kg,
                "recycled_waste_kg": business.recycled_waste_kg,
                "hazardous_waste_kg": business.hazardous_waste_kg,

                "total_carbon": business.total_carbon,
                "created_at": business.created_at

            }

        }), 201

    except Exception as e:

        db.session.rollback()

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


# Get Business History

@business_bp.route("/", methods=["GET"])
@jwt_required()
def get_business_history():

    try:

        user_id = get_jwt_identity()

        company = Company.query.filter_by(
            user_id=user_id
        ).first()

        if not company:

            return jsonify({
                "success": False,
                "message": "Company not found"
            }), 404

        records = BusinessInput.query.filter_by(
            company_id=company.id
        ).order_by(
            BusinessInput.created_at.desc()
        ).all()

        return jsonify({

            "success": True,

            "data": [

                {

                    "id": r.id,
                    "reporting_year": r.reporting_year,
                    "reporting_month": r.reporting_month,

                    "grid_electricity_kwh": r.grid_electricity_kwh,
                    "renewable_electricity_kwh": r.renewable_electricity_kwh,

                    "diesel_liters": r.diesel_liters,
                    "petrol_liters": r.petrol_liters,
                    "lpg_kg": r.lpg_kg,
                    "natural_gas_m3": r.natural_gas_m3,

                    "business_travel_km": r.business_travel_km,
                    "employee_travel_km": r.employee_travel_km,
                    "freight_transport_km": r.freight_transport_km,

                    "general_waste_kg": r.general_waste_kg,
                    "recycled_waste_kg": r.recycled_waste_kg,
                    "hazardous_waste_kg": r.hazardous_waste_kg,

                    "total_carbon": r.total_carbon,
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