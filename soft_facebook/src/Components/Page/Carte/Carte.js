import React, { Component } from 'react';
import Auteur from "./Auteur/Auteur";
import Photo from "./Photo/Photo";
class Carte extends Component {
    render() {
      
        const {author, photo} = this.props.propriete1;

    
    return(
        <div>
          <Auteur propriete2={author}/>
          <Photo img2={photo}/>
          
        </div>
      )
}
}
export default Carte; 