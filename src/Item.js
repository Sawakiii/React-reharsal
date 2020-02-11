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

    return (
        <>
            {pTag}
            <button onClick={handleClick}>{msg}</button>
        </>
    )
}

export default Item




