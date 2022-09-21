import { Component } from "react";
import Router from "next/router";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("그려지고 나서 실행되라");
  }

  componentDidUpdate() {
    if (this.state.count > 5) {
      console.log("변경되고 나서 실행되라");
    }
  }

  componentWillUnmount() {
    console.log("사라질때 실행되라/!!!!");
  }

  onClickCountUp = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  onClickMove = () => {
    void Router.push("/");
  };

  render() {
    return (
      <div>
        {this.state.count}{" "}
        <button onClick={this.onClickCountUp}>카운트 올리기</button>
        <button onClick={this.onClickMove}>나가기</button>
      </div>
    );
  }
}
