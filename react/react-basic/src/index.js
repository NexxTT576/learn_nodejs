// React 框架核心包
// ReactDOM 专门做渲染相关的包
import React from "react";
import ReactDOM from "react-dom";
// 应用的全局样式文件
import "./index.css";
// 引入根组件
import App from "./App";
// 渲染根组件APP到一个id为root的dom节点上
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
