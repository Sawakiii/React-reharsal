import React from "react"
import Item from "./Item"

// propsは↓のように受け取る。
const List = (props) => {

    // propsにはprops.プロパティ名でアクセスする。
    const todolist = props.todos.map((todo)=>{
        return (<Item todo={todo}></Item>)
    })
    return (
        <ul>
            {/* html内のjs変数には{}がつく */}
            {todolist}
        </ul>
    )
}

export default List

