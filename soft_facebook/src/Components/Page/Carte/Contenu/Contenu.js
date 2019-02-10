import React, { Component } from 'react';
import "./Contenu.css";

class Contenu extends Component {
  render() {
    
    const {titre, message} = this.props.descrip;
    
    return (
      <div className="description">
        <h4>{titre}</h4>
        <p>{message}</p>
       
      </div>
    );
  }
}

export default Contenu;