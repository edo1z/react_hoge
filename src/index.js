import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const name = '田中　景';
const func = () => 10 + 15;
let el = () => {
  if (name === '田中　景') {
    return (
      <p className="tanaka">
        こんにちは、{name} {func()+'才'}
      </p>
    );
  } else {
    return (
      <p>
        こんにちは。
      </p>
    );
  }
}

class Welcome extends React.Component {
  render() {
    return <p>Hi, {this.props.name}</p>;
  }
}

const Welcome2 = props => <p>Hi, {props.name}. You are {props.age} year old.</p>;

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    {el()}
    <Welcome name="jiro" />
    <Welcome name="saburo" />
    <Welcome name="shiro" />
    <Welcome2 name="goro" age="55" />
  </React.StrictMode>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
