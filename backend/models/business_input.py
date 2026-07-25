from database import db


class BusinessInput(db.Model):

    __tablename__ = "business_inputs"

    id = db.Column(db.Integer, primary_key=True)

    company_id = db.Column(
        db.Integer,
        db.ForeignKey("companies.id"),
        nullable=False
    )

    electricity_kwh = db.Column(
        db.Float,
        default=0
    )

    fuel_liters = db.Column(
        db.Float,
        default=0
    )

    transport_distance = db.Column(
        db.Float,
        default=0
    )

    waste_kg = db.Column(
        db.Float,
        default=0
    )

    created_at = db.Column(
        db.DateTime,
        server_default=db.func.now()
    )