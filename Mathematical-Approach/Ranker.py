# The purpose of this application is to potentially rank all the given tasks, it takes into account the following factors:
# Completion Time, Deadline, Urgency (On scale of 1-100), Difficulty (On scale of 1-100), And Interest (On scale of 1-10)

# The way it will work, is we will calculate importance values of every single one of the tasks that the user provides based on the factor above, and then we will rank them accordingly.

# Faseeh Naqvi & Zain Syed
# January 15th 2025

taskArray = [{"Task": "Create Chat-To-Do", "Completion": 50, "Deadline": 10, "Difficulty": 20, "Interest": 6},]
# Completion (in hours), Deadline (in days), Difficulty (1-100), Interest (1-10)
allTasksArray = []

for task in taskArray:
    score = 0
    name = task["Task"]
    completion = task["Completion"]
    deadline = task["Deadline"]
    difficulty = task["Difficulty"]
    interest = task["Interest"]

    if completion < deadline:
        score += 150
    
    score += (1/deadline) * 100


