import React from "react";
import ReactDOM from "react-dom/client";

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { seconds: this.props.start};
  }

  tick() {
    this.setState(state => ({seconds: state.seconds + 1}));
  }

  componentDidMount(){
    this.interval = setInterval(() => this.tick(), this.props.ms);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return <h1>Timer {this.state.seconds}</h1>;
  }
}

export default Timer;