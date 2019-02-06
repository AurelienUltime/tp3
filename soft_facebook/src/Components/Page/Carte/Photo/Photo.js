import React, { Component } from 'react';

class Photo extends Component {
  render() {
    const {src, alt} = this.props.img2;
    
    return (
      <div>
          
        <img src={src} alt={alt}/>
      </div>
    );
  }
}

export default Photo;