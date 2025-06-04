/**
 * @Author: lcl
 * @Date: 2025/6/4
 */
/**
 * @function SynthesisEvent
 * @description This class represents a synthetic event in React. It is used to handle events in a way that is consistent across different browsers.
 * */
export class SynthesisEvent {
  constructor(e: any) {
    this.nativeEvent = e; // The original event
  }
  stopPropagation() {
    if (this?.nativeEvent?.stopPropagation) {
      this.nativeEvent.stopPropagation();
      this._stopPropagation = true; // Mark that propagation has been stopped
    }
  }
}

/**
 * @function dispatchEvent
 * @description Dispatches a synthetic event to the target element.
 * @param {Event} e - The current event object.
 * @param {string} type - The type of the event.
 */
const dispatchEvent = (e, type) => {
  const newe = new SynthesisEvent(e);
  const target = e.target; // The target of the event
  let fiber;
  // 找到 当前 React Fiber 节点
  for (const props in target) {
    if (props.toLocaleLowerCase().includes("fiber")) {
      console.log(target[props]);
      fiber = target[props];
    }
  }
};

/**
 * @param {HTMLElement} container - dom节点
 * @param {string} type - 事件类型
 * */
export const addEvent = (container, type) => {
  container.addEventListener(type, (e) => {
    dispatchEvent(e, type);
  });
};
