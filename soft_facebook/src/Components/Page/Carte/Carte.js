import React, { Component } from 'react';
import Auteur from "./Auteur/Auteur";
import Photo from "./Photo/Photo";
import Contenu from "./Contenu/Contenu";
import "./Carte.css";
class Carte extends Component {
   
    constructor(props) {
        super(props)
        this.state = { 
          backgroundColor:"#ffffff",
        
        };
      }
    handleColor(){
      this.setState({backgroundColor:"#000000"});
    }
   

    render() {
      
        const {author, photo, description} = this.props.propriete1;

    
    return(
        <div className="murFB" style={{backgroundColor:this.state.backgroundColor}}>
        
          <Auteur propriete2={author}/>
          <Photo img2={photo}/>
          <Contenu descrip={description}/>
          <button class="change" 
          onClick={()=>{this.handleColor()}}>Color</button>

          
        </div>
      )
}
}
export default Carte; 