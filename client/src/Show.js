import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';
// import { Link } from 'react-router-dom'



class Show extends Component {
    state = {
        show: []
      }
    
      componentDidMount() {
          const {id} = this.props.match.params;
        axios.get(`https://api.betaseries.com/shows/display?id=${id}&key=e4c6631861be`)
          .then(res => {
            const show = res.data.show;
            this.setState({show: show});
            console.log(this.state.show);
          })
      }

      archiver = (e) =>
      {
        const {id} = this.props.match.params;
        const token = localStorage.getItem('token');
        axios.post(`https://api.betaseries.com/shows/archive?id=${id}&token=${token}&key=e4c6631861be`)
        .then(function (response) {
        console.log(response.data.show);
      })
      .catch(function (error) {
      console.log(error);
      })
      }

    supprimer = (e) =>
      {
        const {id} = this.props.match.params;
        const token = localStorage.getItem('token');
        axios.delete(`https://api.betaseries.com/shows/archive?id=${id}&token=${token}&key=e4c6631861be`)
        .then(function (response) {
        console.log(response.data.show);
      })
      .catch(function (error) {
      console.log(error);
      })
      }

      render() {
        const show = this.state.show;
        let url = '';
        let note = '';
        let archive = '';
        if(this.state.show.images){
          url = this.state.show.images.show;
        }
        if(this.state.show.notes){
          note = this.state.show.notes.mean;
        }
        if(this.state.show.user){
          archive = this.state.show.user.archived;
        }
        console.log(archive);

        return (
        <div class='container show'>
        <div className='container-fluid'>
        <img class="img-responsive center-block centre fond" src={url} alt=""></img>
        <div className ='row offset-3 col-8 titre'>
          <h1 class='titre'>{show.title}
          </h1>
        </div>
        </div>
        <div class="row">
        </div>
        <div className='affiche'>
        <img class="img-responsive center-block centre serie" src={`https://api.betaseries.com/pictures/shows?v=3.0&id=${show.id}&key=e4c6631861be`} alt=""></img>
        </div>
        <div>
        <span>{note} SUR 5</span>
        </div>
        <div>
        <p>{show.seasons} SAISONS</p>
        </div>
        <div>
        <p>{show.episodes} EPISODES</p>
        </div>
        <div>
        <p>Durée : {show.length} minutes</p>
        </div>
        <div>
        <p>{show.description}</p>
        </div>
        <p>Genres : {show.genres}</p>
        
        <div>
          {archive === false ? (
            <button type="submit" class='btn btn-danger btn-lg' onClick={this.archiver.bind(this)}>Archiver</button>
          ) : (
            <button type="submit" class='btn btn-danger btn-lg' onClick={this.supprimer.bind(this)}>Sortir des archives</button>
          )}
        </div>
        </div>
      );
      }
    }

export default Show;