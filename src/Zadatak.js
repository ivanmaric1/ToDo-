import React, { Component } from 'react';
import './Zadatak.css';

class Zadatak extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.obrišiZadatak(this.props.id);
  }

  render() {
    return (
      <div className="Zadatak">
        {this.props.imeZadatka}
        <div className="Zadatak-gumbi">
          <button className="Zadatak-butonjara">
            <i className="fas fa-edit"></i>
          </button>
          <button className="Zadatak-butonjara" onClick={this.handleDelete}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Zadatak;
