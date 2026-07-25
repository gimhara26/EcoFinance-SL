from database import db


class Report(db.Model):

    __tablename__ = "reports"

    id = db.Column(db.Integer, primary_key=True)

    company_id = db.Column(
        db.Integer,
        db.ForeignKey("companies.id"),
        nullable=False
    )

    report_title = db.Column(db.String(200),nullable=False)
    report_type = db.Column(db.String(100),nullable=False)
    report_content = db.Column(db.Text,nullable=False)
    report_status = db.Column(db.String(50),default="Generated")
    generated_at = db.Column(db.DateTime,server_default=db.func.now())