import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  //    bind 를 이용해서 this 를 연결시키는 방법 - 1
  //   onClickCountUp(): void {
  //     console.log(this.state.count);
  //   }

  // 화살표 함수로 this 연결 방법 - 2
  onClickCountUp = (): void => {
    console.log(this.state.count);
    this.setState({
      count: 1,
    });
  };

  render(): JSX.Element {
    return (
      <>
        <div>{this.state.count}</div>
        {/* bind 를 이용해서 this 를 연결시키는 방법 - 1 */}
        {/* <button onClick={this.onClickCountUp.bind(this)}>카운트 올리기</button> */}

        {/* 화살표 함수로 this 연결 방법 - 2 */}
        <button onClick={this.onClickCountUp}>카운트 올리기</button>
      </>
    );
  }
}
