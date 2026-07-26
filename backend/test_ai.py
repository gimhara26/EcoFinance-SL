from services.ai.openrouter_client import OpenRouterClient
from services.ai.prompt_builder import PromptLoader

client = OpenRouterClient()

system_prompt = PromptLoader.load("system.txt")
user_prompt = PromptLoader.load("test.txt")

result = client.generate(system_prompt, user_prompt)

print("\n========== AI RESPONSE ==========\n")
print(result["content"])

print("\n========== MODEL ==========\n")
print(result["model"])

print("\n========== USAGE ==========\n")
print(result["usage"])