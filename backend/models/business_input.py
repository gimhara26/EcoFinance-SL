from database import db


class BusinessInput(db.Model):
    __tablename__ = "business_inputs"

    id = db.Column(db.Integer, primary_key=True)

    company_id = db.Column(
        db.Integer,
        db.ForeignKey("companies.id"),
        nullable=False
    )

    reporting_year = db.Column(db.Integer, nullable=False)
    reporting_month = db.Column(db.Integer, nullable=False)

    grid_electricity_kwh = db.Column(db.Float, default=0)
    renewable_electricity_kwh = db.Column(db.Float, default=0)

    diesel_liters = db.Column(db.Float, default=0)
    petrol_liters = db.Column(db.Float, default=0)
    lpg_kg = db.Column(db.Float, default=0)
    natural_gas_m3 = db.Column(db.Float, default=0)

    business_travel_km = db.Column(db.Float, default=0)
    employee_travel_km = db.Column(db.Float, default=0)
    freight_transport_km = db.Column(db.Float, default=0)

    general_waste_kg = db.Column(db.Float, default=0)
    recycled_waste_kg = db.Column(db.Float, default=0)
    hazardous_waste_kg = db.Column(db.Float, default=0)

    total_carbon = db.Column(db.Float, default=0)

    created_at = db.Column(
        db.DateTime,
        server_default=db.func.now()
    )