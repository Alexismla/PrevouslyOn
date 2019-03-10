import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
// import { Link } from 'react-router-dom'



class Serie extends Component {
  constructor(props)
  {
    super();
    this.state = {
        episodes : []
    }
  }
  componentDidMount(){
      const token = localStorage.getItem('token');
      const {id} = this.props.match.params;
    axios.get(`https://api.betaseries.com/episodes/list?v=3.0&token=${token}&showId=${id}`)
    .then(res => {
        const episode = res.data.shows;
        this.setState({ episodes: episode});
        console.log(this.state.episodes);
    })
}


  render() {
    console.log(this.state.episodes);
    return (
      <div class='body'>
      <div class="container">
      <div class="col">
         {this.state.episodes.map((episode,i) =>
        <div class="hovereffect">
        <img class="img-responsive" src={`https://api.betaseries.com/pictures/episodes?v=3.0&id=${episode.unseen.id}&key=e4c6631861be&token=e2ad01225d14`} alt=""></img>
        <div class="overlay">
           <h2>{episode.title}</h2>
           <p>{episode.unseen.code}</p>
        </div>
        <a href={'/serie/episode' + episode.unseen.id} class="info"><i data-key={episode.unseen.id} class="fas fa-play-circle"></i></a>
    </div>

      )}
      </div>
      </div>
      </div>
    );
  }
}

export default Serie;
