import inquirer from "inquirer";

interface TodoItems {
    "itemName": string,
    "description": string,
    "taskDate": Date
}

let taskList: TodoItems[] = [];
while (true) {
    console.log("Welcome to Todo List Manager");
    let taskOperation = await inquirer.prompt({
        name: "oprType",
        type: "list",
        choices: ["Add New Task", "View Task","Exit Task Manager"],
        message: "What do you want to do?"
    })

    switch (taskOperation.oprType) {
        case "Add New Task": {
            let taskName = await inquirer.prompt({
                name: "taskName",
                message: "Enter Task Name:"
            })
            let taskDesc = await inquirer.prompt({
                name: "taskDesc",
                message: "Enter Task Description:"
            })
            let taskEndDate = await inquirer.prompt({
                name: "taskDate",
                message: "Enter Date:(YYYY-MM-DD)"
            })
            let taskItem: TodoItems = { itemName: taskName.taskName, description: taskDesc.taskDesc, taskDate: new Date(Date.parse(taskEndDate.taskDate)) };
            taskList.push(taskItem)
            console.log(taskList);
            continue;
        }
        case "View Task": {
            if (taskList.length == 0) {
                console.log("Task List is empty");
            }
            else {
                taskList.forEach(function (taskItem) {
                    console.log(`TaskName: ${taskItem.itemName}\nTaskDescription: ${taskItem.description}\nTaskDate: ${taskItem.taskDate}`);
                    if (taskItem.taskDate < new Date(Date.now())) {
                        console.log("Task Expired " + Math.ceil((Date.now()-taskItem.taskDate.getTime())/(1000*60*60*24))+" days back.");
                    } else {                        
                        console.log("Task is Active for the next " + Math.ceil((taskItem.taskDate.getTime()-Date.now())/(1000*60*60*24))+" days.")
                    }
                })
            }
            continue;
        }       
    }
    if (taskOperation.oprType=="Exit Task Manager"){
        console.log("Quitting Task Manager")
        break;
    }

}