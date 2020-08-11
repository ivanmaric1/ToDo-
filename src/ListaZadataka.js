import React, { Component } from 'react';
import Zadatak from './Zadatak';
import NoviZadatak from './NoviZadatak';
import './ListaZadataka.css';

class ListaZadataka extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zadatci: [],
    };
    this.dodajZadatak = this.dodajZadatak.bind(this);
  }

  dodajZadatak(noviZadatak) {
    this.setState({
      zadatci: [...this.state.zadatci, noviZadatak],
    });
  }

  render() {
    return (
      <div className="ListaZadataka">
        <h1 className="ListaZadataka-naslov">Lista zadataka!</h1>
        <p className="ListaZadataka-poslovica">- Požuri polako. -</p>
        <ul className="ListaZadataka-lista">
          <li className="ListaZadataka-lista-zadatak">
            {this.state.zadatci.map((item) => (
              <Zadatak imeZadatka={item.ime} />
            ))}
          </li>
        </ul>
        <NoviZadatak dodajZadatak={this.dodajZadatak} />
      </div>
    );
  }
}

export default ListaZadataka;
