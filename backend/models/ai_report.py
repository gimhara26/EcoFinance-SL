from datetime import datetime
from database import db


class AIReport(db.Model):

    __tablename__ = "ai_reports"

    id = db.Column(db.Integer, primary_key=True)

    company_id = db.Column(
        db.Integer,
        db.ForeignKey("companies.id"),
        nullable=False
    )

    business_id = db.Column(
        db.Integer,
        db.ForeignKey("business_inputs.id"),
        nullable=False
    )

    esg_id = db.Column(
        db.Integer,
        db.ForeignKey("esg_scores.id"),
        nullable=False
    )

    model = db.Column(db.String(100))
    prompt = db.Column(db.Text)
    report = db.Column(db.Text)
    prompt_tokens = db.Column(db.Integer)
    completion_tokens = db.Column(db.Integer)
    total_tokens = db.Column(db.Integer)
    cost = db.Column(db.Numeric(12, 6))
    status = db.Column(db.String(20))

    created_by = db.Column(
        db.Integer,
        db.ForeignKey("users.id")
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )