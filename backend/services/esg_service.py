class ESGCalculator:

    # Get Status #

    @staticmethod
    def get_status(score):

        if score >= 90:
            return "Excellent"

        elif score >= 75:
            return "Good"

        elif score >= 60:
            return "Fair"

        elif score >= 40:
            return "Poor"

        return "Critical"

    # Get Remark #

    @staticmethod
    def get_remark(category, status):

        remarks = {

            "Environmental": {

                "Excellent": "Excellent environmental performance. Keep maintaining sustainable practices.",
                "Good": "Good environmental practices. Continue improving renewable energy and recycling.",
                "Fair": "Environmental performance is acceptable but needs improvement.",
                "Poor": "Environmental performance requires significant improvement.",
                "Critical": "Environmental impact is very high. Immediate action is recommended."
            },

            "Social": {

                "Excellent": "Excellent employee welfare and community engagement.",
                "Good": "Good social responsibility practices.",
                "Fair": "Employee welfare can be improved through training and engagement.",
                "Poor": "Social initiatives need improvement.",
                "Critical": "Immediate improvements in employee welfare are recommended."
            },

            "Governance": {

                "Excellent": "Strong governance and compliance practices.",
                "Good": "Good governance with minor improvements possible.",
                "Fair": "Governance is acceptable but can be strengthened.",
                "Poor": "Governance framework needs improvement.",
                "Critical": "High governance risk detected."
            }

        }

        return remarks[category][status]

    # Calculate ESG

    @staticmethod
    def calculate(carbon, esg_input):

        # Environmental 
        if carbon.total_emission <= 500:
            environmental = 95
        elif carbon.total_emission <= 1000:
            environmental = 85
        elif carbon.total_emission <= 2000:
            environmental = 70
        elif carbon.total_emission <= 3000:
            environmental = 55
        elif carbon.total_emission <= 4000:
            environmental = 40
        else:
            environmental = 25

        # Bonuses
        environmental += esg_input.renewable_energy * 0.15
        environmental += esg_input.recycling_rate * 0.10
        

        if esg_input.environmental_policy:
            environmental += 5

        environmental = max(0, min(100, environmental))
       

        # Social 
        social = 0
        social += esg_input.employee_satisfaction * 0.50
        social += esg_input.training_hours * 0.50
        social += esg_input.gender_diversity * 0.30

        if esg_input.community_projects:
            social += 10

        social = max(0, min(100, social))

        # Governance #
        governance = 0
        governance += esg_input.board_meetings * 5

        if esg_input.ethics_policy:
            governance += 30

        if esg_input.compliance:
            governance += 30

        if esg_input.risk_management:
            governance += 20

        governance = max(0, min(100, governance))

        # Overall #

        overall = round(
            (environmental + social + governance) / 3,2
        )

        env_status = ESGCalculator.get_status(environmental)
        social_status = ESGCalculator.get_status(social)
        gov_status = ESGCalculator.get_status(governance)
        overall_status = ESGCalculator.get_status(overall)

        recommendations = []

        if environmental < 75:
            recommendations.append(
                "Increase renewable energy usage and improve recycling."
            )

        if social < 75:
            recommendations.append(
                "Improve employee training and community engagement."
            )

        if governance < 75:
            recommendations.append(
                "Strengthen governance policies and compliance."
            )

        if not recommendations:
            recommendations.append(
                "Maintain your excellent ESG performance."
            )

        return {

            "environmental_score": round(environmental, 2),
            "social_score": round(social, 2),
            "governance_score": round(governance, 2),
            "overall_score": overall,
            "environmental_status": env_status,
            "social_status": social_status,
            "governance_status": gov_status,
            "overall_status": overall_status,

            "environmental_remark":
                ESGCalculator.get_remark("Environmental", env_status),

            "social_remark":
                ESGCalculator.get_remark("Social", social_status),

            "governance_remark":
                ESGCalculator.get_remark("Governance", gov_status),

            "overall_remark":
                f"Overall ESG performance is {overall_status}.",

            "recommendations":
                "\n".join(recommendations)

        }