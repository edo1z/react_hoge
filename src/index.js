import React from 'react';
import ReactDOM from 'react-dom';

const Hoge = props => (
  <p>{props.txt}</p>
);

ReactDOM.render(
  <Hoge txt="HOGE"/>,
  document.getElementById('root')
);
