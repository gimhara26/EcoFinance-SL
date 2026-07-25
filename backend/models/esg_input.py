from database import db


class ESGInput(db.Model):

    __tablename__ = "esg_inputs"

    id = db.Column(db.Integer, primary_key=True)

    company_id = db.Column(
        db.Integer,
        db.ForeignKey("companies.id"),
        nullable=False
    )

    # Environmental #
    renewable_energy = db.Column(db.Float, default=0)
    water_consumption = db.Column(db.Float, default=0)
    recycling_rate = db.Column(db.Float, default=0)
    environmental_policy = db.Column(db.Boolean, default=False)

    # Social #
    employee_satisfaction = db.Column(db.Float, default=0)
    training_hours = db.Column(db.Float, default=0)
    gender_diversity = db.Column(db.Float, default=0)
    community_projects = db.Column(db.Boolean, default=False)

    # Governance #
    board_meetings = db.Column(db.Integer, default=0)
    ethics_policy = db.Column(db.Boolean, default=False)
    compliance = db.Column(db.Boolean, default=False)
    risk_management = db.Column(db.Boolean, default=False)
    created_at = db.Column(
        db.DateTime,
        server_default=db.func.now()
    )