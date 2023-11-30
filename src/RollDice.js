import React, { Component } from "react";
import "./RollDice.css";
import Die from "./Die";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one", rolling: false };
    this.roll = this.roll.bind(this);
  }

  roll() {
    const die1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const die2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState({ die1: die1, die2: die2, rolling: true });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDieContainer">
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling...." : "Roll Dice!"}{" "}
        </button>
      </div>
    );
  }
}

export default RollDice;
