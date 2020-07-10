import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Form = props => {
  return (
    <input
      type="text"
      value={props.txt}
      onChange={props.onChange}
    />
  )
};

const Text = props => (
  <p>{props.txt}</p>
);

const App = () => {
  const [value, setValue] = useState('');
  const onChangeHandler = e => setValue(e.target.value);
  return (
    <div>
      <Form txt={value} onChange={onChangeHandler} />
      <Text txt={value} />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
