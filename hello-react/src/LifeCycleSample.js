import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  };

  myRef = null; //ref설정
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    // v16.3 props 로 받아온 값을 state 에 동기화시키는 용도, 컴포넌트가 마운트될때,업데이트 될때 호출.
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }
  componentDidMount() {
    // 컴포넌트를 만들고, 첫 렌더링을 마친후 실행
    console.log("componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    // props, state 변경시 리렌더링을 할지 여부 결정.
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4;
  }
  componentWillMount() {
    // dom에서 컴포넌트를 제거할때 사용.
    console.log("componentWillUnmount");
  }
  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // render 결과물이 브라우저에 반영되기 직전에 호출
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    // 리렌더링을 완료후 실행,
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapShot) {
      console.log("업데이트 되기 직전 색상:", snapShot);
    }
  }
  render() {
    console.log("render");
    const style = {
      color: this.props.color
    };
    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={ref => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color:{this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
