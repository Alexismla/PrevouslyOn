// import React, { Component } from 'react';
// import axios from 'axios';
// import './Home.css';
// // import { Link } from 'react-router-dom'



// class Episode extends Component {
//     state = {
//         infos_episode : []
//       }
    
//       componentDidMount() {
//           const {id} = this.props.match.params;
//         axios.get(`https://api.betaseries.com/episodes/display?v=3.0&id=${id}&`)
//           .then(res => {
//             const infos = res.data.episode;
//             this.setState({infos_episode: infos});
//             console.log(this.state.infos_episode);
//           })
//       }

//       vue = (e) =>
//       {
//         const {id} = this.props.match.params;
//         const token = localStorage.getItem('token');
//         axios.post(``)
//         .then(function (response) {
//         console.log(response.data.infos_episode);
//       })
//       .catch(function (error) {
//       console.log(error);
//       })
//       }

//     supprimer = (e) =>
//       {
//         const {id} = this.props.match.params;
//         const token = localStorage.getItem('token');
//         axios.delete(``)
//         .then(function (response) {
//         console.log(response.data.infos_episode);
//       })
//       .catch(function (error) {
//       console.log(error);
//       })
//       }

//       render() {
//         const infos_episode = this.state.infos_episode;
//         let note = '';
//         let vue = '';

//         if(this.state.infos_episode.notes){
//           note = this.state.infos_episode.notes.mean;
//         }
//         if(this.state.infos_episode.user){
//           archive = this.state.infos_episode.user.archived;
//         }
//         console.log(archive);

//         return (
//         <div class='container show'>
//         <div className='container-fluid'>
//         <div className ='row offset-3 col-8 titre'>
//           <h1 class='titre'>{infos_episode.title}</h1>
//         </div>
//         </div>
//         <div class="row">
//         </div>
//         <div className='affiche'>
//         <img class="img-responsive center-block centre serie" src={`https://api.betaseries.com/pictures/shows?v=3.0&id=${show.id}&key=e4c6631861be`} alt=""></img>
//         </div>
//         <div>
//         <span>{note} SUR 5</span>
//         </div>
//         <div>
//         <p>{show.seasons} SAISONS</p>
//         </div>
//         <div>
//         <p>{show.episodes} EPISODES</p>
//         </div>
//         <div>
//         <p>Durée : {show.length} minutes</p>
//         </div>
//         <div>
//         <p>{show.description}</p>
//         </div>
//         <p>Genres : {show.genres}</p>
        
//         <div>
//           {archive === false ? (
//             <button type="submit" class='btn btn-danger btn-lg' onClick={this.archiver.bind(this)}>Archiver</button>
//           ) : (
//             <button type="submit" class='btn btn-danger btn-lg' onClick={this.supprimer.bind(this)}>Sortir des archives</button>
//           )}
//         </div>
//         </div>
//       );
//       }
//     }

// export default Episode;