import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import Todo from './component/Todo.js'

import { addTodo, isChecked, deleteTodo } from './component/action/actions'



function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos)
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    if (input) {
      dispatch(addTodo(input))
      setInput('')
    }
  }

  const handleCheck = (id) => {
    dispatch(isChecked(id, todos))

    //  const newTodo = todos.map( todo => {
    //   if(todo.id === id) {
        
    //     return { ...todo, isChecked: !todo.isChecked}
    //   }
    //   return todo
    // })
    // dispatch(isChecked(newTodo))
  }

  const handleDelete = id => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className="app" >
      <div className='main_div'>
        <h4>ADD ITEM</h4>
        <div className='addInput'>
          <input
            type='text'
            name='input'
            value={input}
            placeholder='Enter you task'
            onChange={e => setInput(e.target.value)} />
          <button onClick={handleSubmit}>Add</button>
        </div>

        <div className='todoList'>
          <h4>TODO</h4>
          {
            todos.length === 0 ? <span>No Todos</span> :
              todos.map((todo) => {
                if (todo.isChecked === false) {
                  return (
                    // console.log(todo),
                    <Todo
                      key={todo.id}
                      isChecked={todo.isChecked}
                      todoItem={todo}
                      handleDelete={handleDelete}
                      handleCheck={handleCheck}
                    />

                  )
                } else {
                  return null
                }

              })
          }
        </div>
        <div className='completedList'>
          <h4>COMPLETED</h4>
          {
            todos.map((todo) => {
              if (todo.isChecked === true) {
                return (
                  <Todo
                    key={todo.id}
                    isChecked={todo.isChecked}
                    todoItem={todo}
                    handleCheck={handleCheck}
                  />
                )
              } else {
                return null
              }

            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
