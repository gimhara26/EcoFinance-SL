from services.ai.ai_repository import AIRepository
from services.ai.prompt_builder import PromptBuilder
from services.ai.prompt_loader import PromptLoader
from services.ai.openrouter_client import OpenRouterClient



class AIService:

    def __init__(self):
        self.repository = AIRepository()
        self.client = OpenRouterClient()

    def generate_report(self, user_id):

        # -------------------------------
        # Load Company
        # -------------------------------

        company = self.repository.get_company(user_id)

        if not company:
            raise Exception("Company not found.")

        # -------------------------------
        # Load Latest Business Input
        # -------------------------------

        business = self.repository.get_business(company.id)

        if not business:
            raise Exception("Business data not found.")

        # -------------------------------
        # Load ESG
        # -------------------------------

        esg = self.repository.get_esg(company.id)

        if not esg:
            raise Exception("ESG assessment not found.")

        # -------------------------------
        # Load Carbon
        # -------------------------------

        carbon = self.repository.get_carbon(company.id)

        if not carbon:
            raise Exception("Carbon record not found.")

        # -------------------------------
        # Load Prompts
        # -------------------------------

        system_prompt = PromptLoader.load("system.txt")

        report_instruction = PromptLoader.load(
            "sustainability_report.txt"
        )

        # -------------------------------
        # Build Prompt
        # -------------------------------

        business_prompt = PromptBuilder.build_prompt(
            company,
            business,
            carbon,
            esg
        )

        user_prompt = f"""
{report_instruction}

--------------------------------------------------

{business_prompt}
"""

        # -------------------------------
        # Call OpenRouter
        # -------------------------------

        result = self.client.generate(
            system_prompt,
            user_prompt
        )

        # -------------------------------
        # Save Report
        # -------------------------------

        report = self.repository.save_report(
            company_id=company.id,
            business_id=business.id,
            esg_id=esg.id,
            created_by=user_id,
            model=result["model"],
            prompt=user_prompt,
            report=result["content"],
            prompt_tokens=result["usage"].get("prompt_tokens", 0),
            completion_tokens=result["usage"].get("completion_tokens", 0),
            total_tokens=result["usage"].get("total_tokens", 0),
            cost=result["usage"].get("cost", 0)
        )

        return report 

    def get_history(self, user_id):

        company = self.repository.get_company(user_id)

        if not company:
            raise Exception("Company not found.")

        return self.repository.get_history(company.id)
    
    
    
    def get_report(self, user_id, report_id):

        company = self.repository.get_company(user_id)

        if not company:
            raise Exception("Company not found.")

        report = self.repository.get_report(report_id, company.id)

        if not report:
            raise Exception("AI report not found.")

        return report