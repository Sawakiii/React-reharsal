import React from "react"

const Item = (props) => {

    // 完了と戻すのためのステートを作成。
    const [isDone, setIsDone] = React.useState(false)

    // isDoneの値で完了と戻すが切替
    const msg = isDone === false ? "完了" : "戻す"

    const handleClick = () => {
        // isDoneを反転させる。
        setIsDone(!isDone)
    }
    return (
        <>
            <p>{props.todo}</p>
            <button onClick={handleClick}>{msg}</button>
        </>
    )
}

export default Item




