/**
 * @Author: lcl
 * @Date: 2025/4/14
 */
import React, { Component, createRef, useRef, useState } from "react";

export default function RefExample() {
  // 使用useRef创建ref并初始化current属性为0
  const ref = createRef();
  const countRef = useRef(0);
  const [number, setNumber] = useState(0);
  const incrementCount = () => {
    // 每次点击按钮，将ref中保存的值加1
    countRef.current++;
    ref.current = countRef.current++;
    setNumber(countRef.current);
  };

  // 每次返回新的对象
  console.log(ref); //{current:null}

  return (
    <div>
      <div>
        <p>countRef当前计数: {countRef.current}</p>
        <p>number当前计数: {number}</p>
        <p>当前计数: {countRef.current}</p>
        <button onClick={incrementCount}>增加计数</button>
      </div>
    </div>
  );
}
