# This version uses transformers by Hugging Face instead of an OpenAI client, which makes the process much less datq-hungry and more efficient.
# It works, but it sucks! Nowhere near the computing power we would need to complete a task like this
from transformers import pipeline

generator = pipeline("text-generation", model="distilgpt2")

def getResponse(prompt):
    try:
        response = generator(
            prompt, 
            max_length=100,
            truncation = True,
            pad_token_id=50256, 
            num_return_sequences=1)
        return response[0]["generated_text"]
    except Exception as e:
        return f"Error: {e}"

if __name__ == "__main__":
    user_prompt = input("Enter your prompt: ")
    print("\nResponse:", getResponse(user_prompt))
