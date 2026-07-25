from database import db


class ESGScore(db.Model):

    __tablename__ = "esg_scores"

    id = db.Column(db.Integer, primary_key=True)

    company_id = db.Column(
        db.Integer,
        db.ForeignKey("companies.id"),
        nullable=False
    )

    # Scores #
    environmental_score = db.Column(db.Float, nullable=False)
    social_score = db.Column(db.Float, nullable=False)
    governance_score = db.Column(db.Float, nullable=False)
    overall_score = db.Column(db.Float, nullable=False)

    # Status #
    environmental_status = db.Column(db.String(50))
    social_status = db.Column(db.String(50))
    governance_status = db.Column(db.String(50))
    overall_status = db.Column(db.String(50))

    # Remarks #
    environmental_remark = db.Column(db.Text)
    social_remark = db.Column(db.Text)
    governance_remark = db.Column(db.Text)
    overall_remark = db.Column(db.Text)

    # Recommendations #
    recommendations = db.Column(db.Text)
    created_at = db.Column(
        db.DateTime,
        server_default=db.func.now()
    )