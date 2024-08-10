import React from 'react'

function Todo_details(todo) {

console.log("i am loaded ")

  return (
    <div className='bg-slate-100 text-black border p-3 m-1'>
      <div>
        <h2>Todo Details</h2>
        <p>Todo Id: {todo.id}</p>
        <p>Todo Title: {todo.todo}</p>
        <p>Todo Completed: {todo.completed}</p>
        {/* <p>Todo Create Date : {todo.Date.now()}</p> */}
    </div>
    </div>
  )
}

export default Todo_details


