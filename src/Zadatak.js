import React, { Component } from 'react';
import './Zadatak.css';

class Zadatak extends Component {
  render() {
    return (
      <div className="Zadatak">
        {this.props.imeZadatka}
        <div className="Zadatak-gumbi">
          <button className="Zadatak-butonjara">
            <i className="fas fa-edit"></i>
          </button>
          <button className="Zadatak-butonjara">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Zadatak;
