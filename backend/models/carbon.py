from database import db


class CarbonRecord(db.Model):

    __tablename__ = "carbon_records"

    id = db.Column(db.Integer, primary_key=True)

    company_id = db.Column(
        db.Integer,
        db.ForeignKey("companies.id"),
        nullable=False
    )

    business_input_id = db.Column(
        db.Integer,
        db.ForeignKey("business_inputs.id"),
        nullable=False
    )

    business_input = db.relationship(
        "BusinessInput",
        backref="carbon_record",
        lazy=True
    )

    scope1 = db.Column(db.Float, nullable=False)
    scope2 = db.Column(db.Float, nullable=False)
    scope3 = db.Column(db.Float, nullable=False)

    total_emission = db.Column(db.Float, nullable=False)

    created_at = db.Column(
        db.DateTime,
        server_default=db.func.now()
    )