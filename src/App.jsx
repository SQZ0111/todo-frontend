import "./App.css";
//own components
import { TodoHeader } from "./components/Header/TodoHeader";
import { InputTodo } from "./components/Input/InputTodo";
import { TodoCard } from "./components/Cards/TodoCard";
import { useState } from "react";


function App() {
  const [todos,setTodos] = useState([
    {
      title: "Putzen",
      done: false,
      id: 0,
    },
    {
      title: "Sport",
      done: false,
      id: 1,
    },
    {
      title: "Schlafen",
      done: false,
      id: 2,
    },
  ]);
  return (
    <div className="App">
      <TodoHeader/>
      <InputTodo todos={todos} setTodos={setTodos}/>
      <div className="todos">
        {
          todos.map((todo) => {
            return(
              <TodoCard title={todo.title} done={todo.done} id={todo.id}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
