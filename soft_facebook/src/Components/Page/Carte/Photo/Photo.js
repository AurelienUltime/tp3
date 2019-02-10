import React, { Component } from 'react';
import "./Photo.css";

class Photo extends Component {
  render() {
    const {src, alt} = this.props.img2;
    
    return (
      <div className="Photo">
        <img src={src} alt={alt}/>
      </div>
    );
  }
}

export default Photo;