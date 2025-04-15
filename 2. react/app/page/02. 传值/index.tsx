/**
 * @Author: lcl
 * @Date: 2025/4/15
 */
// import React, { Component } from "react";

// export default class App extends Component {
//   name = React.createRef();
//   password = React.createRef();
//   render() {
//     return (
//       <div>
//         <Son label="name" ref={this.name}></Son>
//         <Son label="password" ref={this.password}></Son>
//         <button onClick={() => this.submits()}>提交</button>
//         <button onClick={() => this.reset()}>重置</button>
//       </div>
//     );
//   }
//   reset() {
//     this.name.current.clear();
//     this.password.current.clear();
//   }
//   submits() {
//     console.log(this.name.current.state.value);
//     console.log(this.password.current.state.value);
//   }
// }
// class Son extends Component {
//   state = {
//     value: "",
//   };
//   render() {
//     console.log(this.props);

//     let { label } = this.props;
//     return (
//       <div>
//         <label>{label}</label>
//         <input
//           value={this.state.value}
//           onInput={(e) => {
//             this.setState({
//               value: e.target.value,
//             });
//           }}
//         ></input>
//       </div>
//     );
//   }
//   clear() {
//     this.setState({
//       value: "",
//     });
//   }
// }

// import React, { useRef, useState } from "react";

import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

// 子组件 Son
const Son = forwardRef((props, ref) => {
  const [value, setValue] = useState("");

  const clear = () => {
    setValue("");
  };

  useImperativeHandle(
    ref,
    () => ({
      clear,
      getValue: () => value,
    }),
    [value, clear]
  );

  return (
    <div>
      <label>{props.label}</label>
      <input
        value={value}
        onInput={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
});

// 父组件 App
const App = () => {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const reset = () => {
    if (nameRef.current) {
      nameRef.current.clear();
    }
    if (passwordRef.current) {
      passwordRef.current.clear();
    }
  };

  const submits = () => {
    if (nameRef.current) {
      console.log(nameRef.current.getValue());
    }
    if (passwordRef.current) {
      console.log(passwordRef.current.getValue());
    }
  };

  return (
    <div>
      <Son label="name" ref={nameRef} />
      <Son label="password" ref={passwordRef} />
      <button onClick={submits}>提交</button>
      <button onClick={reset}>重置</button>
    </div>
  );
};

export default App;
