import React from 'react'

function EditTodo() {
    return (
       
            <div>
                <input
                type='text'
                onChange={e => setEdittingText(e.target.value)}
                value={edittingText}
            />
            <button onClick={editTodo(item.id)}>update</button>
            </div> 
    )
}

export default EditTodo
