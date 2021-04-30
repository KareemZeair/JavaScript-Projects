// ==========================================================================================================//
// Created By: Kareem Zeair
// This is a simple Todo-List console program that features adding, deleting, and listing the user's entries
// Main Commands: new, list, delete, quit
// ==========================================================================================================//

let todoList = {}
let j = 0
let l = 1
let loopingVariable = true

while (loopingVariable) {
    let i = Object.keys(todoList).length
    let userCommand = prompt('What would you like to do?')

    if (userCommand === 'new') {
        let newTodo = prompt('Enter new todo');
        todoList[i] = newTodo;
        console.log('Updated Todo List: ', todoList);
    }

    else if (userCommand === 'list') {
        console.log('Todo List: ', todoList);
    }

    else if (userCommand === 'delete') {
        j = prompt('Enter index of the todo you want to remove:');
        let valuesArray = Object.values(todoList);
        let k = parseInt(j) + l

        while (j < valuesArray.length) {

            let newString = todoList[k]
            todoList[j] = newString
            delete todoList[k];
            if (todoList[j] === undefined) {
                delete todoList[j];
            }
            l++; j++; k++;
        }

        console.log('Updated Todo List: ', todoList);
    }

    else if (userCommand === 'quit') {
        loopingVariable = false
    }

    else {
        userCommand = prompt('Please enter a valid command!')
    }

}
