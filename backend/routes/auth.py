from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token

from database import db
from models.user import User

auth_bp = Blueprint("auth", __name__)

bcrypt = Bcrypt()


# Register

@auth_bp.route("/register", methods=["POST"])
def register():

    try:

        data = request.get_json()

        if not data:
            return jsonify({
                "success": False,
                "message": "No data received."
            }), 400

        full_name = data.get("full_name", "").strip()
        email = data.get("email", "").strip().lower()
        password = data.get("password", "")
        confirm_password = data.get("confirm_password", "")

        # Validation

        if full_name == "":
            return jsonify({
                "success": False,
                "message": "Full name is required."
            }), 400

        if email == "":
            return jsonify({
                "success": False,
                "message": "Email is required."
            }), 400

        if password == "":
            return jsonify({
                "success": False,
                "message": "Password is required."
            }), 400

        if len(password) < 6:
            return jsonify({
                "success": False,
                "message": "Password must be at least 6 characters."
            }), 400

        if password != confirm_password:
            return jsonify({
                "success": False,
                "message": "Passwords do not match."
            }), 400

        existing_user = User.query.filter_by(email=email).first()

        if existing_user:
            return jsonify({
                "success": False,
                "message": "Email already exists."
            }), 409

        hashed_password = bcrypt.generate_password_hash(
            password
        ).decode("utf-8")

        new_user = User(
            full_name=full_name,
            email=email,
            password=hashed_password
        )

        db.session.add(new_user)
        db.session.commit()

        return jsonify({

            "success": True,
            "message": "Registration successful."

        }), 201

    except Exception as e:

        db.session.rollback()

        return jsonify({

            "success": False,
            "message": str(e)

        }), 500


# Login
@auth_bp.route("/login", methods=["POST"])
def login():

    try:

        data = request.get_json()

        if not data:

            return jsonify({

                "success": False,
                "message": "No data received."

            }), 400

        email = data.get("email", "").strip().lower()
        password = data.get("password", "")

        if email == "" or password == "":

            return jsonify({

                "success": False,
                "message": "Email and password are required."

            }), 400

        user = User.query.filter_by(email=email).first()

        if not user:

            return jsonify({

                "success": False,
                "message": "Invalid email or password."

            }), 401

        if not bcrypt.check_password_hash(
                user.password,
                password):

            return jsonify({

                "success": False,
                "message": "Invalid email or password."

            }), 401

        access_token = create_access_token(
            identity=str(user.id)
        )

        return jsonify({

            "success": True,

            "message": "Login successful.",

            "token": access_token,

            "user": {
                "id": user.id,
                "full_name": user.full_name,
                "email": user.email
            }

        }), 200

    except Exception as e:

        return jsonify({

            "success": False,
            "message": str(e)

        }), 500


# Check Email

@auth_bp.route("/check-email/<email>", methods=["GET"])
def check_email(email):

    user = User.query.filter_by(
        email=email.lower()
    ).first()

    return jsonify({

        "exists": user is not None

    })


# Health Check

@auth_bp.route("/health", methods=["GET"])
def health():

    return jsonify({

        "status": "OK",
        "module": "Authentication"

    })