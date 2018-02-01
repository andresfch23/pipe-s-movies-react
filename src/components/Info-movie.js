import React, { Component } from 'react';
import Iframe from 'react-iframe';
import MainDescription from './Main-description.js';


class InfoMovie extends Component {
  render() {
    return (
        <div className="main__info">
            <div className="main__description-video">
                <Iframe 
                    className="main__video" 
                    width="560" 
                    height="315" 
                    url="https://www.youtube.com/embed/xKJmEC5ieOk" 
                    frameBorder="0" 
                    allowFullScreen
                    position="relative"
                    />  
            </div>
            <MainDescription />
        </div>
    );
  }
}

export default InfoMovie;




