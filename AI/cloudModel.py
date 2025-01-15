#This code uses a cloud based AI Processing software as opposed to doing it locally on the machine, unfortunately we only get 30k tokens a month
#Works in theory but is slow
from huggingface_hub import InferenceClient

client = InferenceClient(token="YOUR_API_TOKEN") 

def get_response(prompt):
    response = client.text_generation(
        model="facebook/opt-125m",
        prompt=prompt,
        max_new_tokens=100,
        temperature=0.7,
    )
    return response

if __name__ == "__main__":
    prompt = input("Enter your prompt: ")
    print(get_response(prompt))