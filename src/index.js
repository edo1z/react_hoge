import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <p>Clock - {this.state.id}</p>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Clock id="1" />
    <Clock id="2" />
    <Clock id="3" />
  </React.StrictMode>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
