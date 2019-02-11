import React, { Component } from 'react';
import Carte from "./Carte/Carte";
import "./Page.css";

class Page extends Component {
    render() {
      
        const {texte} =this.props.texte;
    
    return(
        <div className="conteneur_bas">
         <p>{texte}</p>
         <button className="bonus">j'aime</button>
        </div>
      );
}
}
export default Page; 