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
    if (seconds > 59) {
      this.state = {
        minutes: (seconds / 60).toFixed(0),
        seconds: seconds - ((seconds / 60).toFixed(0) * 60),
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
      <div
        className="flex flex-col grow justify-center items-center"
      >
        <div className="bg-gray-800 flex flex-col items-center w-1/2 rounded-t-xl">
          <h1 className="text-white text-9xl cronometro">
            {minutes.toString().padStart(2, '0')}
            :
            {seconds.toString().padStart(2, '0')}
          </h1>
        </div>
        <div className="flex flex-row justify-center w-1/2">
          <button
            type="button"
            className="bg-gray-700 text-white p-3 rounded-l-xl rounded-t-none w-1/2"
            onClick={() => {
              if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
              } else { this.interval = setInterval(() => this.tick(), ms); }
            }}
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
            className="bg-red-700 text-white p-3 rounded-b-xl rounded-t-none rounded-l-none w-1/2"
          >
            Zerar
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
