import requests
from config import Config


class OpenRouterClient:
    def __init__(self):
        self.api_key = Config.OPENROUTER_API_KEY
        self.model = Config.OPENROUTER_MODEL
        self.url = Config.OPENROUTER_URL

    def generate(self, system_prompt, user_prompt):
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }

        payload = {
            "model": self.model,
            "messages": [
                {
                    "role": "system",
                    "content": system_prompt,
                },
                {
                    "role": "user",
                    "content": user_prompt,
                },
            ],
            "temperature": 0.3,
            "max_tokens": 2000,
        }

        response = requests.post(
            self.url,
            headers=headers,
            json=payload,
            timeout=120,
        )

        response.raise_for_status()

        data = response.json()

        return {
            "content": data["choices"][0]["message"]["content"],
            "usage": data.get("usage", {}),
            "model": data.get("model", self.model),
        }