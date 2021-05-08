import * as actionTypes from '../actionType'


const deleteTodo = id => {
    return {
        type: actionTypes.DELETE_ITEMS,
        todos: {
            id
        }
    }
}

export default deleteTodo