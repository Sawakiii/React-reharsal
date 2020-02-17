import React from "react"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"

const Form = (props) => {
    const handleSubmit = (e) => {
        // デフォルトの挙動を停止
        e.preventDefault()

        // stateをコピーする。
        const todos = props.todos.slice()

        // イベントの発生がformならinputされた値を取得する。
        const newTodo = e.target.title.value
        console.log(newTodo)

        // inputされた値をtodoに追加
        todos.push(newTodo)

        // 更新したtodosをセットする。
        props.setTodos(todos)
    }
    
    return(
        <form action="submit" onSubmit={
            // イベントの発生を感知
            (e)=>{
                handleSubmit(e)
            }}>
            <TextField id="standard-basic" label="Standard" type="text" name="title" />
            <button type="submit">追加</button>
        </form>
    )
}

export default Form




