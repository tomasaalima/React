import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    const { start } = props;
    this.state = {
      minutes: 0,
      seconds: start,
    };
    this.convert();
  }

  componentDidMount() {
    const { ms } = this.props;
    this.interval = setInterval(() => this.tick(), ms);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  convert() {
    const { seconds } = this.state;
    const { minutes } = this.state;
    if (seconds > 59) {
      this.state = {
        minutes: (seconds / 60).toFixed(0),
        seconds: seconds - (minutes * 60),
      };
    }
  }

  tick() {
    const { seconds } = this.state;
    this.setState((state) => ({ seconds: state.seconds + 1 }));
    if (seconds === 59) {
      this.setState((state) => ({
        minutes: state.minutes + 1,
        seconds: 0,
      }));
    }
  }

  render() {
    const { seconds } = this.state;
    const { minutes } = this.state;
    const { ms } = this.props;
    return (
      <>
        <div className="bg-azulEscuro flex flex-col items-center w-1/2 m-auto rounded-xl mt-5 mb-5 border-4 border-blue-800">
          <h1 className="text-white text-9xl cronometro">
            {minutes.toString().padStart(2, '0')}
            :
            {seconds.toString().padStart(2, '0')}
          </h1>
        </div>
        <div className="flex flex-row justify-center gap-5">
          <button
            type="button"
            onClick={() => {
              if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
              } else { this.interval = setInterval(() => this.tick(), ms); }
            }}
            className="bg-black text-white p-3 rounded-xl"
          >
            Iniciar | Parar
          </button>
          <button
            type="button"
            onClick={() => {
              this.setState(
                () => ({
                  minutes: 0,
                  seconds: 0,
                }),
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
