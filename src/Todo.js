import React from 'react'

function Todo({ inputText, handleDelete, handleEdit, handleCheck, isChecked }) {

    return (
        <div style={{ display: 'flex' }}>
            <input type='checkbox' checked={isChecked} onChange={(e) => handleCheck(inputText.id)} value={inputText.id} />
            <h4 style={inputText.isChecked ? { textDecoration: 'line-through' } : null} >{inputText.input}</h4>
            <button onClick={handleEdit ? (e) => handleEdit(inputText.id) : null} >Edit</button>
            <button onClick={handleDelete ? () => handleDelete(inputText.id) : null} >delete</button>
        </div>
    )
}

export default Todo
