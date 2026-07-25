from database import db


class CarbonRecord(db.Model):

    __tablename__ = "carbon_records"

    id = db.Column(db.Integer, primary_key=True)

    company_id = db.Column(
        db.Integer,
        db.ForeignKey("companies.id"),
        nullable=False
    )

    electricity_kwh = db.Column(db.Float)
    fuel_liters = db.Column(db.Float)
    transport_distance = db.Column(db.Float)
    waste_kg = db.Column(db.Float)
    total_emission = db.Column(db.Float)

    created_at = db.Column(
        db.DateTime,
        server_default=db.func.now()
    )