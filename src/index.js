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
      active: true,
      date: new Date()
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.active) {
      this.setState({
        date: new Date()
      })
    }
  }

  handleClick(a, b, id, e) {
    e.preventDefault();
    console.log(id + 'がクリックされました');
    console.log(this.state.id);
    this.setState(state => ({active: !state.active}));
  }

  render() {
    return (
      <div>
        <p>Clock - {this.state.id}</p>
        {this.state.date.toLocaleTimeString()}
        <a
          href="https://google.com"
          onClick={this.handleClick.bind(this, 10, 20, this.state.id)}
        >
          Delete
        </a>
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
