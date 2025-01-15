from openai import OpenAI

client = OpenAI(
    # repalce api key
    api_key="OPENAI_API_KEY"
)

def getResponse(prompt):
    try:
        response = client.chat.completions.create(
            messages=[
                {"role": "user", "content": prompt }
            ],
            model="gpt-3.5-turbo",
            max_tokens=50,
            temperature=0.3
        )
        return response['choices'][0]['message']['content']
    except Exception as e:
        return str(e)
    
if __name__ == "__main__":
    user_prompt = input("Enter your prompt: ")
    response = getResponse(user_prompt)
    print(f"AI Response: {response}")