import React, { Component } from 'react';
import Iframe from 'react-iframe';
import MainDescription from './Main-description.js';

class InfoMovie extends Component {
  render() {
    const { videos } = this.props.infoMovie;
    return (
        <div className="main__info">
            <div className="main__description-video">
                { videos ?
                    <Iframe 
                        className="main__video"     
                        width="560" 
                        height="315" 
                        url={`https://www.youtube.com/embed/${this.props.infoMovie.videos.results[0].key}`} 
                        frameBorder="0" 
                        allowFullScreen
                        position="relative"
                    />
                : ''}  
            </div>
            <MainDescription infoMovie={this.props.infoMovie} similarMovies={this.props.similarMovies}/>
        </div>
    );
  }
}

export default InfoMovie;




