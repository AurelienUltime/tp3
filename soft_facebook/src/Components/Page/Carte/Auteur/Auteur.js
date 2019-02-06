import React, { Component } from 'react';

class Auteur extends Component {
  render() {
    const {nom, prenom, age} = this.props.propriete2;
    
    return (
      <div>
        <h4>{nom}</h4>
        <p>{prenom}</p>
        <p>{age}</p>
      </div>
    );
  }
}

export default Auteur;