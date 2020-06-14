import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      content: 'ほげ',
      flavor: 'mango'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
           name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <label>
          Pick your favorite flavor:
          <select
            name="flavor"
            value={this.state.flavor}
            onChange={this.handleChange}
          >
            <option value="apple">Apple</option>
            <option value="lime">Lime</option>
            <option value="nut">Nut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br/>
        <label>
          Content:
          <textarea
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default ContactForm;
