import React, { useState,useEffect } from "react";
import { TodoProvider } from "./context/Todocontext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItems";
import Navigation from "./components/navigation/Navigation";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{...todo }, ...prev]);
  };

  const updatedTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((value) => value.id !== id));
  };
   

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    if (todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updatedTodo, toggleComplete, deleteTodo }}
    >
      <Navigation/>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
             {/* Todo form goes here */} 
            <TodoForm />
            
          </div>
          <div className="flex flex-wrap gap-y-3">
             {/*Loop and Add TodoItem here */}
            {todos.map((value)=> (
              <div key={value.id} className="w-full">
               <TodoItem todo={value} />
              </div>
            ))}

          </div>
          <button onClick={ ()=>setTodos([])} className="underline m-3 hover:text-red-500">Clear All Todos</button>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
