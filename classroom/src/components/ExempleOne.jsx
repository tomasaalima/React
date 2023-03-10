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
    return (
    <>
      <div className="bg-azulEscuro flex flex-col items-center w-1/2 m-auto rounded-xl mt-5 mb-5 border-4 border-blue-800">
      <h1 className="text-white text-9xl cronometro">
        Timer {this.state.seconds}
      </h1>
    </div>
      <div className="flex flex-row justify-center gap-5">
        <button
        onClick={() => {
          if(this.interval){
            clearInterval(this.interval);
            this.interval = null
          }
          else
            this.interval = setInterval(() => this.tick(), this.props.ms);
        }}
        className="bg-black text-white p-3 rounded-xl"
        >
        Iniciar | Parar
        </button>
        <button
        onClick={() => {
          this.setState(
            state => ({seconds: 0})
          );
          clearInterval(this.interval);
        }}
        className="bg-red-700 text-white p-3 rounded-xl"
        >
        Zerar
        </button>
      </div>
    </>
    );
  }
}

export default Timer;