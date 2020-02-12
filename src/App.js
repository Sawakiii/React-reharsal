// Reactのインポート。jsxが書けるようになる。
import React from "react"

// 他のコンポーネントをインポートする。
import Form from "./Form"
import List from "./List"

// コンポーネントの定義
const App = () => {

  // データの設定 [state名, stateの再定義名] = React.useState(stateの初期値)
  const [todos, setTodos] = React.useState(["宿題をやる"])

  // htmlのレンダリング
  return (
    <>
    <Form todos={todos} setTodos={setTodos}></Form>
    {/* stateはプロパティとして渡す */}
    <List todos={todos} setTodos={setTodos}></List>
    </>
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


