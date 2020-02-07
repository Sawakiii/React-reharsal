// Reactのインポート。jsxが書けるようになる。
import React from "react"

// 他のコンポーネントをインポートする。
import Form from "./Form"
import List from "./List"

// コンポーネントの定義
const App = () => {
  return (
    <>
    <Form></Form>
    <List></List>
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


