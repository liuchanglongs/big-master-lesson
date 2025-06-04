/**
 * @Author: lcl
 * @Date: 2025/6/4
 */
/**
 * @Author: lcl
 * @Date: 2025/4/15
 */
import React, { Component, useEffect } from "react";
import { addEvent } from "./utils/index";
// 父组件 App
const App = () => {
  useEffect(() => {
    addEvent(document.getElementById("myApp"), "click");
  }, []);
  return (
    <div id="myApp">
      <div onClick={(e) => console.log("click div")}>
        <h3
          onClick={(e) => {
            console.log("click h3");
          }}
        >
          你好
        </h3>
        <button
          onClick={(e) => {
            console.log("click button");
          }}
        >
          点击
        </button>
      </div>
    </div>
  );
};

export default App;
