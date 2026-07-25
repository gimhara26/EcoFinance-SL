from database import db


class Company(db.Model):

    __tablename__ = "companies"

    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=False
    )

    company_name = db.Column(db.String(200), nullable=False)
    business_sector = db.Column(db.String(150))
    registration_no = db.Column(db.String(100))
    address = db.Column(db.Text)
    district = db.Column(db.String(100))
    province = db.Column(db.String(100))
    contact_no = db.Column(db.String(20))
    website = db.Column(db.String(200))

    created_at = db.Column(
        db.DateTime,
        server_default=db.func.now()
    )

    business_inputs = db.relationship(
        "BusinessInput",
        backref="company",
        cascade="all, delete"
    )
    esg_inputs = db.relationship(
        "ESGInput",
        backref="company",
        cascade="all, delete"
    ) 

    carbon_records = db.relationship(
        "CarbonRecord",
        backref="company",
        cascade="all, delete"
    )

    reports = db.relationship(
        "Report",
        backref="company",
        cascade="all, delete"
    )