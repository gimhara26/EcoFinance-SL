from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from database import db
from models.user import User
from models.company import Company


profile_bp = Blueprint("profile", __name__)


# GET PROFILE (User + Company) 

@profile_bp.route("/", methods=["GET"])
@jwt_required()
def get_profile():

    try:

        user_id = get_jwt_identity()

        user = User.query.get(user_id)

        if not user:
            return jsonify({
                "success": False,
                "message": "User not found"
            }), 404

        company = Company.query.filter_by(user_id=user_id).first()

        return jsonify({
            "success": True,
            "user": {
                "id": user.id,
                "full_name": user.full_name,
                "email": user.email,
                "created_at": user.created_at
            },
            "company": None if not company else {
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


# UPDATE USER PROFILE

@profile_bp.route("/", methods=["PUT"])
@jwt_required()
def update_profile():

    try:

        user_id = get_jwt_identity()
        data = request.get_json()

        user = User.query.get(user_id)

        if not user:
            return jsonify({
                "success": False,
                "message": "User not found"
            }), 404

        if "full_name" in data:
            user.full_name = data["full_name"]

        if "email" in data:
            user.email = data["email"].lower()

        db.session.commit()

        return jsonify({
            "success": True,
            "message": "Profile updated successfully"
        }), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500