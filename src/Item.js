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
    const msg = isDone === false ? "完了" : "戻す"

    // ステートが変更されるとレンダリングが変更される。
    const pTag = isDone ? <Pdone>{props.todo}</Pdone> : <P>{props.todo}</P>

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

    return (
        <>
            {pTag}
            <button onClick={handleClick}>{msg}</button>
            <button onClick={handleDelete}>削除</button>
        </>
    )
}

export default Item




