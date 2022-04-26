import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login";
import Board from "./Board";
import Article from "./Article";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/**定义二级嵌套 */}
          {/**默认二级 添加index属性 把它自己的path干掉 */}
          <Route index element={<Board />}></Route>
          <Route path="article" element={<Article />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        {/**当所有的路径都没有匹配时 做兜底匹配显示 未找到 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
