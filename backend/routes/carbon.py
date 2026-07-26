from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.carbon import CarbonRecord
from models.company import Company

carbon_bp = Blueprint("carbon", __name__)

# Get Carbon History 
@carbon_bp.route("/", methods=["GET"])
@jwt_required()
def get_carbon_history():

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

        records = CarbonRecord.query.filter_by(
            company_id=company.id
        ).order_by(
            CarbonRecord.created_at.desc()
        ).all()

        data = []

        for record in records:

            business = record.business_input

            data.append({

                "id": record.id,

                "reporting_year": business.reporting_year,
                "reporting_month": business.reporting_month,

                "scope1": record.scope1,
                "scope2": record.scope2,
                "scope3": record.scope3,

                "total_emission": record.total_emission,

                "created_at": record.created_at

            })

        return jsonify({

            "success": True,
            "data": data

        }), 200

    except Exception as e:

        return jsonify({

            "success": False,
            "message": str(e)

        }), 500