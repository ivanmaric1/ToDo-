import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NoviZadatak.css';

class NoviZadatak extends Component {
  constructor(props) {
    super(props);
    this.state = { ime: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const id = uuidv4();
    this.props.dodajZadatak({ ...this.state, id });
    this.setState({ ime: '' });
  }

  render() {
    return (
      <form className="NoviZadatak" onSubmit={this.handleSubmit}>
        <label>Novi zadatak</label>
        <div className="NoviZadatak-container">
          <input
            type="text"
            name="ime"
            className="NoviZadatak-input"
            value={this.state.ime}
            onChange={this.handleChange}
          ></input>
          <button className="NoviZadatak-butonjara">Dodaj zadatak!</button>
        </div>
      </form>
    );
  }
}

export default NoviZadatak;
