import React, { Component } from 'react';
import "./Auteur.css";

class Auteur extends Component {
  render() {
    const {nom, prenom, age} = this.props.propriete2;
    
    return (
      <div className="identite">
        <h4>{nom}</h4>
        <p>{prenom}</p>
        <p>{age}</p>
      </div>
    );
  }
}

export default Auteur;