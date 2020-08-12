import React, { Component } from 'react';
import './Zadatak.css';

class Zadatak extends Component {
  constructor(props) {
    super(props);
    this.state = { uređujeSe: false, zadatak: this.props.imeZadatka };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleEdit() {
    this.setState({ uređujeSe: !this.state.uređujeSe });
  }

  handleDelete() {
    this.props.obrišiZadatak(this.props.id);
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateZadatak(this.props.id, this.state.zadatak);
    this.setState({ uređujeSe: false });
  }

  handleChange(evt) {
    this.setState({
      zadatak: evt.target.value,
    });
  }

  render() {
    let rezultat;
    if (this.state.uređujeSe) {
      rezultat = (
        <div>
          <form onSubmit={this.handleUpdate} className="Edit">
            <input
              className="Edit-input"
              type="text"
              value={this.state.zadatak}
              onChange={this.handleChange}
              name="zadatak"
            />
            <button className="Edit-butonjara">Spremi</button>
          </form>
        </div>
      );
    } else {
      rezultat = (
        <div className="Zadatak">
          {this.props.imeZadatka}
          <div className="Zadatak-gumbi">
            <button className="Zadatak-butonjara" onClick={this.handleEdit}>
              <i className="fas fa-edit"></i>
            </button>
            <button className="Zadatak-butonjara" onClick={this.handleDelete}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      );
    }
    return rezultat;
  }
}

export default Zadatak;
