import React, { Component } from 'react';
import './Zadatak.css';

class Zadatak extends Component {
  render() {
    return (
      <div className="Zadatak">
        {this.props.imeZadatka}
        <div className="Zadatak-gumbi">
          <button className="Zadatak-butonjara">Uredi</button>
          <button className="Zadatak-butonjara">X</button>
        </div>
      </div>
    );
  }
}

export default Zadatak;
