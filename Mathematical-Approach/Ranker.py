# The purpose of this application is to potentially rank all the given tasks, it takes into account the following factors:
# Completion Time, Deadline, Urgency (On scale of 1-100), Difficulty (On scale of 1-100), And Interest (On scale of 1-10)

# The way it will work, is we will calculate importance values of every single one of the tasks that the user provides based on the factor above, and then we will rank them accordingly.

# Faseeh Naqvi & Zain Syed
# January 15th 2025

taskArray = [
        {"Task": "Create Chat-To-Do", "Completion": 50, "Deadline": 10, "Difficulty": 20, "Interest": 6},
        {"Task": "Finish Report", "Completion": 30, "Deadline": 5, "Difficulty": 15, "Interest": 8},
        {"Task": "Prepare Presentation", "Completion": 80, "Deadline": 2, "Difficulty": 10, "Interest": 9}
    ]
# Completion (in hours), Deadline (in days), Difficulty (1-100), Interest (1-10)

allTasksArray = []
criticalPath = []
late = []

for task in taskArray:
    score = 0
    name = task["Task"]
    completion = task["Completion"]
    deadline = task["Deadline"]
    difficulty = task["Difficulty"]
    interest = task["Interest"]
    

def criticalPathAnalysis(): #The purpose of this function is to determine what order the tasks should be completed in SOLELY based on how long they take, and their deadlines.
    criticalPath = sorted(taskArray, key=lambda task: task['Deadline'])

    for task in criticalPath:
        if (task["Deadline"] < task["Completion"]*24):
            criticalPath.remove(task)
            late.append(task)
            print("Task: " + task["Task"] + " is late")
    
    for task in late:
        late = sorted(late, key=lambda task: (task['Completion'] - task['Deadline']*24))
    
    for task in criticalPath:
        print(task["Task"])
    for task in late:
        print(task["Task"])

criticalPathAnalysis()



#
# 1) D=20 C=100
# 2) D=10 C=50
# 3) D=5 C=30
# 
# 5) D=1 C=10
#
#
#
# 4) D=2 C=80