import React, { Component } from 'react';
import Carte from "./Components/Page/Carte/Carte";
import './App.css';

const carte1 = {
  author: {
    prenom: "Joaquim t'es le plus beau",
    nom: "B.",
    age: 21
  },
  photo: {
    scr: "https://www.teteamodeler.com/images/illustration/Image/coloriage/coloriage15.gif",
    alt: "meme"
  }
  
}

class App extends Component {
  render() {
    
    return (
      <div>
        <h2>Affiche moi mes putains d'auteurs</h2>
        <Carte propriete1={carte1}/>
      </div>
      
    );
  }

}

export default App;
