import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  power = 50;

  onClickCountUp = () => {
    console.log("asd");
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        {this.state.count}{" "}
        <button onClick={this.onClickCountUp}>카운트 올리기</button>
      </div>
    );
  }
}
