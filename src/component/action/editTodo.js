import * as actionTypes from '../actionType'

const editTodo = todo => {
    return {
        type: actionTypes.EDIT,
        todos: todo
    }
}

export default editTodo
