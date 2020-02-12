import React from "react"
import Item from "./Item"

// propsは↓のように受け取る。
const List = (props) => {

    // propsにはprops.プロパティ名でアクセスする。
    const todolist = props.todos.map((todo, id)=>{
        return (<Item todo={todo} id={id} todos={props.todos} setTodos={props.setTodos}></Item>)
    })
    return (
        <ul>
            {/* html内のjs変数には{}がつく */}
            {todolist}
        </ul>
    )
}

export default List

