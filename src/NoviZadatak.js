import React, { Component } from 'react';
import './NoviZadatak.css';

class NoviZadatak extends Component {
  render() {
    return (
      <form className="NoviZadatak">
        <label>Novi zadatak</label>
        <div className="NoviZadatak-container">
          <input type="text" className="NoviZadatak-input"></input>
          <button className="NoviZadatak-butonjara">Dodaj zadatak!</button>
        </div>
      </form>
    );
  }
}

export default NoviZadatak;
