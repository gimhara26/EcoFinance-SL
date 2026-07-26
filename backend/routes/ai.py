from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from services.ai.ai_service import AIService

ai_bp = Blueprint("ai", __name__)

ai_service = AIService()


@ai_bp.route("/generate", methods=["POST"])
@jwt_required()
def generate_ai_report():
    try:

        user_id = get_jwt_identity()

        report = ai_service.generate_report(user_id)

        return jsonify({
            "success": True,
            "message": "AI report generated successfully.",
            "report": {
                "id": report.id,
                "company_id": report.company_id,
                "business_id": report.business_id,
                "esg_id": report.esg_id,
                "model": report.model,
                "content": report.report,
                "created_at": report.created_at.isoformat()
            }
        }), 201

    except Exception as e:

        return jsonify({
            "success": False,
            "message": str(e)
        }), 400

@ai_bp.route("/history", methods=["GET"])
@jwt_required()
def get_ai_history():

    try:

        user_id = get_jwt_identity()

        reports = ai_service.get_history(user_id)

        return jsonify({

            "success": True,

            "data": [

                {
                    "id": report.id,
                    "company_id": report.company_id,
                    "business_id": report.business_id,
                    "esg_id": report.esg_id,

                    "model": report.model,

                    "status": report.status,

                    "prompt_tokens": report.prompt_tokens,
                    "completion_tokens": report.completion_tokens,
                    "total_tokens": report.total_tokens,

                    "cost": report.cost,

                    "created_at": report.created_at

                }

                for report in reports

            ]

        }), 200

    except Exception as e:

        return jsonify({

            "success": False,
            "message": str(e)

        }), 500

@ai_bp.route("/<int:id>", methods=["GET"])
@jwt_required()
def get_ai_report(id):

    user_id = get_jwt_identity()

    report = ai_service.get_report(user_id, id)

    return jsonify({
        "success": True,
        "data": {
            "id": report.id,
            "report": report.report,
            "model": report.model,
            "created_at": report.created_at
        }
    })