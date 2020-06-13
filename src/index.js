import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Hello = (props) => <p>Hello!<br />{props.msg}</p>
const GoodNight = (props) => <p>Good Night!<br />{props.msg}</p>
const NightDesu = (props) => !props.isNight ? null : <p>夜ですね</p>;

const Greeting = props => {
  const msg = 'My name is tanaka.';
  return (
    <div>
      {props.isNight && <GoodNight msg={msg} />}
      {props.isNight
        ? <GoodNight msg={msg} />
        : <Hello msg={msg} />
      }
      <NightDesu isNight={props.isNight} />
    </div>
  )
};

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Greeting isNight={true} />
  </React.StrictMode>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
