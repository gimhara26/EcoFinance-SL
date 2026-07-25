from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from database import db
from models.company import Company
from models.user import User

company_bp = Blueprint("company", __name__)


# Create Company Profile 

@company_bp.route("/", methods=["POST"])
@jwt_required()
def create_company():

    try:
        user_id = get_jwt_identity()
        data = request.get_json()

        existing = Company.query.filter_by(user_id=user_id).first()

        if existing:
            return jsonify({
                "success": False,
                "message": "Company already exists"
            }), 400

        company = Company(
            user_id=user_id,
            company_name=data.get("company_name"),
            business_sector=data.get("business_sector"),
            registration_no=data.get("registration_no"),
            address=data.get("address"),
            district=data.get("district"),
            province=data.get("province"),
            contact_no=data.get("contact_no"),
            website=data.get("website")
        )

        db.session.add(company)
        db.session.commit()

        return jsonify({
            "success": True,
            "message": "Company created successfully"
        }), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


# Get Company Profile

@company_bp.route("/", methods=["GET"])
@jwt_required()
def get_company():

    try:
        user_id = get_jwt_identity()

        company = Company.query.filter_by(user_id=user_id).first()

        if not company:
            return jsonify({
                "success": False,
                "message": "Company not found"
            }), 404

        return jsonify({
            "success": True,
            "company": {
                "id": company.id,
                "company_name": company.company_name,
                "business_sector": company.business_sector,
                "registration_no": company.registration_no,
                "address": company.address,
                "district": company.district,
                "province": company.province,
                "contact_no": company.contact_no,
                "website": company.website
            }
        }), 200

    except Exception as e:
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


# Update Company Profile

@company_bp.route("/", methods=["PUT"])
@jwt_required()
def update_company():

    try:
        user_id = get_jwt_identity()
        data = request.get_json()

        company = Company.query.filter_by(user_id=user_id).first()

        if not company:
            return jsonify({
                "success": False,
                "message": "Company not found"
            }), 404

        company.company_name = data.get("company_name", company.company_name)
        company.business_sector = data.get("business_sector", company.business_sector)
        company.registration_no = data.get("registration_no", company.registration_no)
        company.address = data.get("address", company.address)
        company.district = data.get("district", company.district)
        company.province = data.get("province", company.province)
        company.contact_no = data.get("contact_no", company.contact_no)
        company.website = data.get("website", company.website)

        db.session.commit()

        return jsonify({
            "success": True,
            "message": "Company updated successfully"
        }), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500