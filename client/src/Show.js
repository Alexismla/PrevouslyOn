import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'



class Show extends Component {
    state = {
        Show: []
      }
    
      componentDidMount() {
          const {id} = this.props.match.params;
          console.log(id);

        axios.get(`https://api.betaseries.com/shows/display?id=${id}&key=e4c6631861be`)
          .then(res => {
            const show = res.data;
            this.setState({Show: [show]});
            console.log(this.state.show);
          })
      }
    
      render() {
        return (
        <div class='container-fluid'>
        {this.state.Show.map((show,i) =>
        <div class="">
        <h1>{show.title}</h1>
        <img class="img-responsive" src={`https://api.betaseries.com/pictures/shows?v=3.0&id=${show.id}&key=e4c6631861be`} alt=""></img>
        <div class="">
        <div class='row'>
        <p>Nb de saison : {show.seasons_details.numbers}</p>
        <p>Nb d'épisodes : {show.seasons_details.episodes}</p>
        </div>
        <p>La note : {show.rating}</p>
        <div>
        <h3>Le résumer</h3>
        <p>{show.description}</p>
        </div>
        <h3>Catégorie : {show.genres}</h3>
        </div>
    </div>
      )}
    </div>
    );
      
      }
    }

export default Show;