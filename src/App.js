// Reactのインポート。jsxが書けるようになる。
import React from "react"

// 他のコンポーネントをインポートする。
import Form from "./Form"
import List from "./List"

// css in jsのためにstyled-componentsをインポート
import styled from "styled-components"

// cssの定義
// const タグ名の定義 = styled.タグ名`スタイル`
const Div = styled.div`
`

// コンポーネントの定義
const App = () => {

  // データの設定 [state名, stateの再定義名] = React.useState(stateの初期値)
  const [todos, setTodos] = React.useState(["宿題をやる"])

  // htmlのレンダリング
  return (
    <Div>
    <Form todos={todos} setTodos={setTodos}></Form>
    {/* stateはプロパティとして渡す */}
    <List todos={todos} setTodos={setTodos}></List>
    </Div>
  )
}



// class App extends React.Component {
//   render() {
//     return(
//       <div>aaaaaa</div>
//     )
//   }
// }

// コンポーネントのエクスポート
export default App


