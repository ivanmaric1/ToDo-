import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NoviZadatak.css';

class NoviZadatak extends Component {
  constructor(props) {
    super(props);
    this.state = { ime: '', imaPodataka: true };
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
    if (this.state.ime === '') {
      this.setState({ imaPodataka: false });
    } else {
      this.setState({ imaPodataka: true });
      this.props.dodajZadatak({ ...this.state, id });
      this.setState({ ime: '' });
    }
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
          />
          <button className="NoviZadatak-butonjara">Dodaj zadatak!</button>
        </div>
        {this.state.imaPodataka ? (
          console.log('Uspješno upisan zadatak!')
        ) : (
          <p className="NoviZadatak-alert">
            * * * Molim te da uneseš zadatak!!* * *
          </p>
        )}
      </form>
    );
  }
}

export default NoviZadatak;
