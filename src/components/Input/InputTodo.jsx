import { CiCirclePlus } from "react-icons/ci";
import { useRef } from "react";
export function InputTodo({todos,setTodos}) {
    const inputRef = useRef();
    function newTodo() {
        console.log(inputRef.current.value);
    }

    function handleClickTodoAdd(event) {
       newTodo(event);
    }
    function handleEnterTodoAdd(event) {
        if(event.key === "Enter") {
            newTodo(event);
        }
    }
    return(
        <>
            <div className="input-todo">
                <input  placeholder="type your todo" ref={inputRef} onKeyDown={handleEnterTodoAdd}/>
                <CiCirclePlus handleOnClick={handleClickTodoAdd}/>
            </div>
        </>
    )
}