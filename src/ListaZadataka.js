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
    this.obrišiZadatak = this.obrišiZadatak.bind(this);
    this.updateZadatak = this.updateZadatak.bind(this);
  }

  obrišiZadatak(id) {
    this.setState({
      zadatci: this.state.zadatci.filter((item) => item.id !== id),
    });
  }

  dodajZadatak(noviZadatak) {
    this.setState({
      zadatci: [...this.state.zadatci, noviZadatak],
    });
  }

  updateZadatak(id, updatedText) {
    const updatedZadatci = this.state.zadatci.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ime: updatedText };
      } else {
        return todo;
      }
    });
    this.setState({ zadatci: updatedZadatci });
  }

  render() {
    return (
      <div className="ListaZadataka">
        <h1 className="ListaZadataka-naslov">Lista zadataka!</h1>
        <p className="ListaZadataka-poslovica">- Požuri polako. -</p>
        <ul className="ListaZadataka-lista">
          <li className="ListaZadataka-lista-zadatak">
            {this.state.zadatci.map((item) => (
              <Zadatak
                imeZadatka={item.ime}
                key={item.id}
                id={item.id}
                obrišiZadatak={this.obrišiZadatak}
                updateZadatak={this.updateZadatak}
              />
            ))}
          </li>
        </ul>
        <NoviZadatak dodajZadatak={this.dodajZadatak} />
      </div>
    );
  }
}

export default ListaZadataka;
