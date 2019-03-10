import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
// import { Link } from 'react-router-dom'



class Member extends Component {
  constructor(props)
  {
    super();
    this.state = {
        info : []
    }
  }
  componentDidMount(){
    axios.get(`https://api.betaseries.com/shows/member?v=3.0&id=${localStorage.getItem('id')}&key=e4c6631861be`)
    .then(res => {
        const info = res.data.shows;
        this.setState({ info: info});
    })
}

supprimer = (e) =>
{
  const id = e.target.getAttribute('data-key');
  console.log(id);
  const token = localStorage.getItem('token');
  axios.delete(`https://api.betaseries.com/shows/show?id=${id}&token=${token}&key=e4c6631861be`)
  .then(function (response) {
    this.componentDidMount();
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
})

}

  render() {
    return (
      <div class='body'>
      <div class="container">
      <div class="col">
         {this.state.info.map((info,i) =>
        <div class="hovereffect">
        <img class="img-responsive" src={`https://api.betaseries.com/pictures/shows?v=3.0&id=${info.id}&key=e4c6631861be`} alt=""></img>
        <div class="overlay">
           <h2>{info.title}</h2>
        </div>
        <a href='/member' class="info"><i data-key={info.id} onClick={this.supprimer} class="fas fa-minus-circle plus fa-2x"></i></a>
        <a href={'/Show/'+ info.id} class="info"><i data-key={info.id} class="fas fa-info-circle plus fa-2x"></i></a>
        <a href={'/serie/' + info.id} class="info"><i data-key={info.id} class="fas fa-list"></i></a>

    </div>

      )}
      </div>
      </div>
      </div>
    );
  }
}

export default Member;
