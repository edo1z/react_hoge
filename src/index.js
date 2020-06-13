import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Numbers = props => {
  const listItems = props.numbers.map(n => {
    return <li key={n.toString()}>{n * 3}</li>
  });
  return <ul>{listItems}</ul>
};

const root = document.getElementById('root');
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <React.StrictMode>
    <Numbers numbers={numbers} />
  </React.StrictMode>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
