import React, { useEffect } from "react"

import styled from "styled-components"


// スタイルの記述
const P = styled.p`
` 
const Pdone = styled.p`
    text-decoration: line-through;
` 

const Item = (props) => {

    // 完了と戻すのためのステートを作成。
    const [isDone, setIsDone] = React.useState(false)
    // 編集機能のためのステート
    const [edit, setEdit] = React.useState(false)
    const msg = isDone === false ? "完了" : "戻す"

    const handleClick = () => {
        setIsDone(!isDone)
    }
    const handleDelete = () => {
        let newTodos = props.todos.slice()

        // 該当する配列の要素を削除
        newTodos.splice(props.id, 1)

        //stateを更新
        props.setTodos(newTodos)
    }

    // ステートが変更されると関連する要素は再レンダリングされる。
    // ステートが変更されるとレンダリングが変更される。
    const pTag = isDone ? <Pdone>{props.todo}</Pdone> : <P>{props.todo}</P>

    // 編集ステートが変更されるとレンダリングが変更される。
    let element
    if (edit) {
        element = <form action="submit" onSubmit={(e)=>{
            e.preventDefault()
            const newTodos = props.todos.slice()
            newTodos[props.id] = e.target.title.value
            props.setTodos(newTodos)
            setEdit(!edit)
        }}>
            <input type="text" placeholder={pTag} name="title"/>
            <button type="submit">編集完了</button>
        </form>
    } else {
        element = <div>
            {pTag}
            <button onClick={handleClick}>{msg}</button>
            <button onClick={handleDelete}>削除</button>
            <button onClick={()=>{setEdit(!edit)}}>編集</button>
        </div>
    }

    return (
        <>
            {element}
        </>
    )
}

export default Item




