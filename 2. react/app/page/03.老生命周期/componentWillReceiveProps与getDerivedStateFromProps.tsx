import React from "react";

// 使用 componentWillReceiveProps 的组件（不推荐在新代码中使用）
class ComponentWithCWRC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propValue: props.value,
      number: 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps 被调用");
    // if (nextProps.value !== this.props.value) {
    //   this.setState({
    //     propValue: nextProps.value,
    //   });
    // }
  }

  render() {
    return (
      <div>
        <p>componentWillReceiveProps 组件接收到的值: {this.state.propValue}</p>
        <p>我的：{this.state.number}</p>
        <div
          onClick={() => {
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </div>
      </div>
    );
  }
}

// 使用 getDerivedStateFromProps 的组件
class ComponentWithGDSFP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propValue: props.value,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps 被调用");
    if (props.value !== state.propValue) {
      return {
        propValue: props.value,
      };
    }
    return null;
  }

  render() {
    return (
      <div>
        <p>getDerivedStateFromProps 组件接收到的值: {this.state.propValue}</p>
      </div>
    );
  }
}

// 父组件，用于传递不同的 props
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>更新值</button>
        {/* <ComponentWithCWRC value={this.state.value} /> */}
        <ComponentWithCWRC />
        <ComponentWithGDSFP />
      </div>
    );
  }
}

export default ParentComponent;
