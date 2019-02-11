import React, { Component } from 'react';
import Carte from "./Components/Page/Carte/Carte";
import './App.css';
import Page from "./Components/Page/Page";
//import photoBonFormatCV from "photoBonFormatCV.jpg";
const carte1 = {
  author: {
    prenom: "Jean(ne)",
    nom: "DUJARDIN",
    age: "Indéfini"
  },
  photo: {
    src: "https://i.ytimg.com/vi/Cf9L7KMwmsk/maxresdefault.jpg",
    alt: "meme"
  },
  description: {
    titre: "A propos de moi",
    message: "Salut, ca farte ?"
    
  }
  
}
const carte2 = {
  author: {
    prenom: "Martine",
    nom: "A LA PLAGE.",
    age: "Indéfini"
  },
  photo: {
    src: "https://www.agoravox.fr/local/cache-vignettes/L300xH375/martinealaplage_m-5d69a.jpg",
    alt: "meme"
  },
  description: {
    titre: "A propos de moi",
    message: "Je suis actuellement à la recherche d'un stage de 4 mois"
    
  }
  
}
const carte3 = {
  author: {
    prenom: "Claude",
    nom: "FRANCOIS",
    age: "Indéfini"
  },
  photo: {
    src: "https://vignette.wikia.nocookie.net/michelsardou/images/3/3f/Claude_Fran%C3%A7ois.jpg/revision/latest?cb=20171026193315&path-prefix=fr",
    alt: "meme"
  },
  description: {
    titre: "A propos de moi",
    message: "Je suis actuellement dans mon bain"
    
  }
  
}
const page1= {
  texte : "je ne change pas ma couleur de background et je suis supposé contenir un bouton like"

}

class App extends Component {

// initialiser le state

  constructor(props) {
    super(props);
    this.state = {
      user: carte1,
      pg: page1
    }

  }
  handleClick1() {
    // gerer le state
    this.setState({user : carte1});
    
  }
  handleClick2() {
    // gerer le state
    this.setState({user : carte2});
    
  }
  handleClick3(){
    this.setState({user : carte3})
  }
  render() {
    
    return (
      <div className="Corps">

        <button className="btn" onClick={()=>{this.handleClick1()}}>Jeanne</button>
        <button className="btn" onClick={()=>{this.handleClick2()}}>Martine</button>
        <button className="btn" onClick={()=>{this.handleClick3()}}>Claude</button>
        <h2>Bonjour {this.state.user.author.prenom} </h2>
        <Carte propriete1={this.state.user}/>
        <Page texte={this.state.pg}/>
    
      </div>
      
    );
  }

}

export default App;
