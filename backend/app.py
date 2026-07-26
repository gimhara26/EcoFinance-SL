from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate

from config import Config
from database import db

# Import Routes #

from routes.auth import auth_bp
from routes.company import company_bp
from routes.carbon import carbon_bp
from routes.esg import esg_bp
from routes.dashboard import dashboard_bp
from routes.reports import reports_bp
from routes.profile import profile_bp
from routes.business import business_bp
from routes.ai import ai_bp

import models

# Create App #

app = Flask(__name__)

app.config.from_object(Config)

# Extensions #

db.init_app(app)

migrate = Migrate(app, db)

bcrypt = Bcrypt(app)

jwt = JWTManager(app)


CORS(
    app,
    resources={r"/api/*": {"origins": "*"}},
    allow_headers=["Content-Type", "Authorization"]
)

# Register Blueprints #

app.register_blueprint(auth_bp, url_prefix="/api/auth")
app.register_blueprint(company_bp, url_prefix="/api/company")
app.register_blueprint(carbon_bp, url_prefix="/api/carbon")
app.register_blueprint(esg_bp, url_prefix="/api/esg")
app.register_blueprint(dashboard_bp, url_prefix="/api/dashboard")
app.register_blueprint(reports_bp, url_prefix="/api/reports")
app.register_blueprint(profile_bp, url_prefix="/api/profile")
app.register_blueprint(business_bp,url_prefix="/api/business")
app.register_blueprint(ai_bp, url_prefix="/api/ai")

# Home Route #
@app.route("/")
def home():
    return {
        "project": "EcoFinance SL",
        "status": "Running Successfully"
    }

# Start Server #

if __name__ == "__main__":

    # with app.app_context():
    #     db.create_all()

    app.run(
        debug=True,
        host="0.0.0.0",
        port=5000
    )