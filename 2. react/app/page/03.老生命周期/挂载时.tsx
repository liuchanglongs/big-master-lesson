/**
 * @Author: lcl
 * @Date: 2025/4/17
 */
import React from "react";

/**
 * @Author: lcl
 * @Date: 2025/4/17
 */
class Child extends React.PureComponent {
  constructor() {
    super();
    console.log("子的constructor执行了");
  }
  componentWillMount() {
    console.log("子的componentWillMount执行了");
  }
  componentDidMount() {
    console.log("子的componentDidMount执行了");
  }
  render() {
    console.log("子的render执行了");
    return null;
  }
}
class Parent extends React.PureComponent {
  constructor() {
    super();
    console.log("父的constructor执行了");
  }
  componentWillMount() {
    console.log("父的componentWillMount执行了");
  }
  componentDidMount() {
    console.log("父的componentDidMount执行了");
  }
  render() {
    console.log("父的render执行了");
    return <Child />;
  }
}

export default Parent;
