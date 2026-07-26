from pathlib import Path


class PromptLoader:

    # backend/prompts/
    PROMPT_DIR = Path(__file__).resolve().parents[2] / "prompts"

    @classmethod
    def load(cls, filename: str) -> str:

        file_path = cls.PROMPT_DIR / filename

        if not file_path.exists():
            raise FileNotFoundError(
                f"Prompt file not found: {file_path}"
            )

        with open(file_path, "r", encoding="utf-8") as file:
            return file.read()