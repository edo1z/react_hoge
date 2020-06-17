import React from 'react';

const IsExpensive = props => {
  if (props.yen >= 100) return <p>Expensive</p>;
  return <p>Cheep</p>;
}

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onPriceChange(e.target.value);
  }
  render() {
    return (
      <div>
        <input
          value={this.props.price}
          onChange={this.handleChange}
        />
        {this.props.type}
      </div>
    );
  }
}

class CalcForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {yen: 0, dol: 0};
    this.handleYenChange = this.handleYenChange.bind(this);
    this.handleDolChange = this.handleDolChange.bind(this);
  }
  handleYenChange(yen) {
    this.setState({yen: yen, dol: yen/100});
  }
  handleDolChange(dol) {
    this.setState({yen: dol*100, dol: dol});
  }
  render() {
    return (
      <div>
        <Price
          price={this.state.yen}
          type="円"
          onPriceChange={this.handleYenChange}
        />
        <Price
          price={this.state.dol}
          type="ドル"
          onPriceChange={this.handleDolChange}
        />
        <IsExpensive yen={this.state.yen} />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <CalcForm />
    </div>
  );
}

export default App;
