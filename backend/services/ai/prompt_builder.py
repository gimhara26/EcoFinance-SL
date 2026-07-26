from datetime import datetime


class PromptBuilder:

    @staticmethod
    def build_company(company, business):

        return f"""
    ==============================
    Company Information
    ==============================

    Company Name:
    {company.company_name}

    Business Sector:
    {company.business_sector}

    Reporting Year:
    {business.reporting_year}

    Reporting Month:
    {business.reporting_month}
    """

    @staticmethod
    def build_business(business):

        return f"""
    ==============================
    Business Data
    ==============================

    Grid Electricity:
    {business.grid_electricity_kwh} kWh

    Renewable Electricity:
    {business.renewable_electricity_kwh} kWh

    Diesel:
    {business.diesel_liters} Liters

    Petrol:
    {business.petrol_liters} Liters

    LPG:
    {business.lpg_kg} kg

    Natural Gas:
    {business.natural_gas_m3} m³

    Business Travel:
    {business.business_travel_km} km

    Employee Travel:
    {business.employee_travel_km} km

    Freight Transport:
    {business.freight_transport_km} km

    General Waste:
    {business.general_waste_kg} kg

    Recycled Waste:
    {business.recycled_waste_kg} kg

    Hazardous Waste:
    {business.hazardous_waste_kg} kg
    """

    @staticmethod
    def build_carbon(carbon):

        return f"""
    ==============================
    Carbon Emissions
    ==============================

    Scope 1:
    {carbon.scope1:.2f} kgCO₂e

    Scope 2:
    {carbon.scope2:.2f} kgCO₂e

    Scope 3:
    {carbon.scope3:.2f} kgCO₂e

    Total:
    {carbon.total_emission:.2f} kgCO₂e
    """

    @staticmethod
    def build_esg(esg):

        return f"""
    ==============================
    ESG Assessment
    ==============================

    Environmental Score:
    {esg.environmental_score}

    Social Score:
    {esg.social_score}

    Governance Score:
    {esg.governance_score}

    Overall ESG Score:
    {esg.overall_score}
    """

    @classmethod
    def build_prompt(
        cls,
        company,
        business,
        carbon,
        esg
    ):

        return "\n".join([
            cls.build_company(company, business),
            cls.build_business(business),
            cls.build_carbon(carbon),
            cls.build_esg(esg)
        ])