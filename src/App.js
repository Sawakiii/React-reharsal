// Reactのインポート。jsxが書けるようになる。
import React from "react"

// 他のコンポーネントをインポートする。
import Form from "./Form"
import List from "./List"

// コンポーネントの定義
const App = () => {

  // データの設定
  const [todos, setTodos] = React.useState(["宿題をやる"])

  return (
    <>
    <Form></Form>
    <List todos={todos}></List>
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


