from database import db

from models.company import Company
from models.business_input import BusinessInput
from models.esg import ESGScore
from models.carbon import CarbonRecord
from models.ai_report import AIReport


class AIRepository:

    @staticmethod
    def get_company(user_id):
        return Company.query.filter_by(user_id=user_id).first()

    @staticmethod
    def get_business(company_id):
        return (
            BusinessInput.query
            .filter_by(company_id=company_id)
            .order_by(BusinessInput.created_at.desc())
            .first()
        )

    @staticmethod
    def get_esg(company_id):
        return (
            ESGScore.query
            .filter_by(company_id=company_id)
            .order_by(ESGScore.created_at.desc())
            .first()
        )

    @staticmethod
    def get_carbon(company_id):
        return (
            CarbonRecord.query
            .filter_by(company_id=company_id)
            .order_by(CarbonRecord.created_at.desc())
            .first()
        )

    @staticmethod
    def save_report(
        company_id,
        business_id,
        esg_id,
        created_by,
        model,
        prompt,
        report,
        prompt_tokens,
        completion_tokens,
        total_tokens,
        cost,
    ):

        ai_report = AIReport(
            company_id=company_id,
            business_id=business_id,
            esg_id=esg_id,
            model=model,
            prompt=prompt,
            report=report,
            prompt_tokens=prompt_tokens,
            completion_tokens=completion_tokens,
            total_tokens=total_tokens,
            cost=cost,
            status="generated",
            created_by=created_by,
        )

        db.session.add(ai_report)
        db.session.commit()

        return ai_report


    @staticmethod
    def get_history(company_id):
        return (
            AIReport.query
            .filter_by(company_id=company_id)
            .order_by(AIReport.created_at.desc())
            .all()
        )
    
    @staticmethod
    def get_report(report_id, company_id):

        return AIReport.query.filter_by(
            id=report_id,
            company_id=company_id
        ).first()