import * as actionTypes from '../actionType'


export function addTodo(input) {
    return {
        type: actionTypes.ADD_ITEMS,
        todos: {
            id: new Date().getTime().toString(),
            input,
            isChecked: false
        }
    }
}

export function isChecked (id, todos) {

    const newTodo = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, isChecked: !todo.isChecked }
        }
        return todo
    })
    return {
        type: actionTypes.ISCHECKED,
        todos: newTodo
    }
}



export const deleteTodo = id => {
    return {
        type: actionTypes.DELETE_ITEMS,
        todos: {
            id
        }
    }
}


export const editTodo = (id, edittingText) => {

    return {
        type: actionTypes.EDIT,
        todos: {id, input: edittingText}
    }
}






