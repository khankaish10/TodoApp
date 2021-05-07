import React, { useState } from 'react'
import './App.css';
import Todo from './Todo'

const todoList = [
  { id: 1, input: 'apple', isChecked: false },
  { id: 2, input: 'pineapple', isChecked: false },
  { id: 3, input: 'orange', isChecked: false },
  { id: 4, input: 'mango', isChecked: true },
]

function App() {
  const [input, setInput] = useState('')
  const [items, setItems] = useState(todoList)

  const [todoEditting, setTodoEditting] = useState(null)
  const [edittingText, setEdittingText] = useState('')

  const handleInput = () => {
    setItems([...items, { id: new Date().getTime().toString(), input, isChecked: false }])
    setInput('')
  }

  const handleCheck = id => {
    // console.log(e.target.checked)
    const newTodo = items.map(item => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked }
      }
      return item
    })
    setItems(newTodo)
  }

  const handleEdit = (id) => {
    // console.log('editted')
    // const newTodo = [...items]
    // newTodo.map( todo => {
    //   if(todo.id === id) {
    //     setTodoEditting(id)
    //   }
    // })
    console.log(id)
    setTodoEditting(id)

  }

  const editTodo = id => {

    const updatedTodo = [...items];
    updatedTodo.map(todo => {
      if (todo.id === id) {
        todo.input = edittingText;
      }
      return todo
    })
    setItems(updatedTodo)
    setTodoEditting(null)
    setEdittingText('')

  }


  const handleDelete = id => {
    const newTodo = items.filter(item => item.id !== id)
    setItems(newTodo)
  }

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Add Your task here </h1>

      <div>
        <input
          type='text'
          name='input'
          value={input}
          placeholder='Enter you task'
          onChange={e => setInput(e.target.value)} />
        <button onClick={handleInput}>Add</button>
      </div>

      <h1>Todos</h1>
      {
        items.length === 0 ? <span>No Todos</span> :
          items.map((item) => {
            if (item.isChecked === false) {
              return (
                
                <Todo
                  key={item.id}
                  isChecked={item.isChecked}
                  inputText={item}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  handleCheck={handleCheck}
                />

              )
            } else {
              return null
            }

          })
      }

      <h2> Completed</h2>
      {

        items.map((item) => {
          if (item.isChecked === true) {
            return (
              <Todo
                key={item.id}
                isChecked={item.isChecked}
                inputText={item}
                handleCheck={handleCheck}
              />
            )
          } else {
            return null
          }

        })
      }

    </div>
  );
}

export default App;
// todoEditting === inputText.id ? (
//   <div>
//       <input
//       type='text'
//       onChange={e => edit(e,inputText.id)}
//       value={edittingText}
//   />
//   {/* <button onClick={}>update</button> */}
//   </div>
