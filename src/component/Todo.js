import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {editTodo} from './action/actions'
import './Todo.css'

function Todo({ todoItem, handleDelete, handleCheck, isChecked }) {

    const dispatch = useDispatch()

    const [editable, setEditable] = useState(false);
    const [edittingText, setEdittingText] = useState(todoItem.input)

    const handleEdit = (id) => {
        setEditable(!editable)
        if(editable) {
            dispatch(editTodo(id, edittingText))
        }

    }
    return (
        <div className='todoItem'>
            <div className='editableContainer'>
                <input type='checkbox' checked={isChecked} onChange={() => handleCheck(todoItem.id)} value={todoItem.input} />

                {
                    editable === false ? (
                        <div style={todoItem.isChecked ? { textDecoration: 'line-through' } : null} className='todoText' >{todoItem.input}</div>
                    ) : (

                        <input
                            className='editableInput'
                            type='text'
                            onChange={e => setEdittingText(e.target.value)}
                            value={edittingText}
                            placeholder='Enter to edit'
                        />

                    )
                }
            </div>
            <div className='button'>
                <button onClick={isChecked ? null : (e) => handleEdit(todoItem.id)} >Edit</button>
                <button onClick={handleDelete ? () => handleDelete(todoItem.id) : null} >Delete</button>
            </div>
        </div>
    )
}

export default Todo
