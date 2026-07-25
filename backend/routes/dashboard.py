from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from sqlalchemy import func

from database import db
from models.user import User
from models.company import Company
from models.carbon import CarbonRecord
from models.esg import ESGScore
from models.report import Report

dashboard_bp = Blueprint("dashboard", __name__)


# Dashboard Summary #

@dashboard_bp.route("/", methods=["GET"])
@jwt_required()
def dashboard():

    try:

        user_id = get_jwt_identity()

        company = Company.query.filter_by(user_id=user_id).first()

        if company is None:

            return jsonify({
                "success": False,
                "message": "Company not found"
            }), 404

        # Total Carbon 

        total_emission = db.session.query(

            func.coalesce(
                func.sum(CarbonRecord.total_emission),0)

        ).filter(

            CarbonRecord.company_id == company.id

        ).scalar()

        # Average ESG #
        average_esg = db.session.query(

            func.coalesce(
                func.avg(ESGScore.overall_score),0)

        ).filter(

            ESGScore.company_id == company.id

        ).scalar()

        # Total Reports 

        report_count = Report.query.filter_by(
            company_id=company.id
        ).count()

        # Latest ESG #
        latest_esg = ESGScore.query.filter_by(
            company_id=company.id
        ).order_by(
            ESGScore.created_at.desc()
        ).first()

        latest_esg_data = None

        if latest_esg:

            latest_esg_data = {

                "environmental_score": latest_esg.environmental_score,
                "social_score": latest_esg.social_score,
                "governance_score": latest_esg.governance_score,
                "overall_score": latest_esg.overall_score,

                "environmental_status": latest_esg.environmental_status,
                "social_status": latest_esg.social_status,
                "governance_status": latest_esg.governance_status,
                "overall_status": latest_esg.overall_status,

                "environmental_remark": latest_esg.environmental_remark,
                "social_remark": latest_esg.social_remark,
                "governance_remark": latest_esg.governance_remark,
                "overall_remark": latest_esg.overall_remark,

                "recommendations": latest_esg.recommendations

                }

        return jsonify({

            "success": True,

            "data": {

                "company_name": company.company_name,
                "total_emission": float(total_emission),
                "average_esg_score": round(float(average_esg), 2),
                "total_reports": report_count,
                "latest_esg": latest_esg_data

            }

        }), 200

    except Exception as e:

        return jsonify({

            "success": False,
            "message": str(e)

        }), 500