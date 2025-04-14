import React, { Component } from "react";
import { useRef, useState } from "react";

export default function index() {
  const [isComponentVisible, setIsComponentVisible] = useState(true);
  const toggleComponent = () => {
    // 切换组件的显示与隐藏
    setIsComponentVisible(!isComponentVisible);
  };
  return (
    <div>
      {isComponentVisible && <RefExample></RefExample>}
      <h1>类组件</h1>
      {isComponentVisible && <RefExample1></RefExample1>}
      <button onClick={toggleComponent}>
        {isComponentVisible ? "隐藏组件" : "显示组件"}
      </button>
    </div>
  );
}

class RefExample1 extends Component {
  constructor(props: any) {
    super(props);
    // 初始化计数器的 ref 对象
    this.countRef = React.createRef();
    this.countRef.current = 0;
    // 初始化组件显示状态和用于页面显示的计数器状态
    this.state = {
      isComponentVisible: true,
      displayCount: 0,
    };
    // 绑定方法到当前实例
    this.incrementCount = this.incrementCount.bind(this);
    this.toggleComponent = this.toggleComponent.bind(this);
  }

  incrementCount() {
    // 增加计数器的值
    this.countRef.current++;
    // 更新 state 中的 displayCount，触发页面更新
    this.setState({
      displayCount: this.countRef.current,
    });
    console.log(this.countRef.current);
  }

  toggleComponent() {
    // 切换组件显示状态
    this.setState((prevState) => ({
      isComponentVisible: !prevState.isComponentVisible,
    }));
  }

  render() {
    return (
      <div>
        <div>
          <p>当前计数: {this.state.displayCount}</p>
          <button onClick={this.incrementCount}>增加计数</button>
        </div>
      </div>
    );
  }
}

function RefExample() {
  // 使用useRef创建ref并初始化current属性为0
  const countRef = useRef(0);
  const [number, setNumber] = useState(0);
  const incrementCount = () => {
    // 每次点击按钮，将ref中保存的值加1
    countRef.current++;
    setNumber(countRef.current);
  };

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
