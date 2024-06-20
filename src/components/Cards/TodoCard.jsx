//extern components
import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

export function TodoCard({title,done,id}) {
    return(
        <>
            <div>
                <li>{title}</li>
                <FaTrash />
                <FaCheck />
            </div>
        </>
    )
}