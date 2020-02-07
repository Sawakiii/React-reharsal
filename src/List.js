import React from "react"
import Item from "./Item"

const List = (props) => {
    const todolist = props.todos.map((todo)=>{
        return (<Item todo={todo}></Item>)
    })
    return (
        <ul>
            {todolist}
        </ul>
    )
}

export default List

