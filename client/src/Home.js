import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom'


class Home extends Component {
  constructor(props)
  {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount(){
    axios.get(`https://api.betaseries.com/shows/discover?v=3.0&key=e4c6631861be`)
    .then(res => {
      const series = res.data.shows;
      for (let index = 0; index < series.length; index++) {
        this.setState({ data: [...this.state.data,series[index]]});
      }
    })
}

ajouter = (e) =>
{
  const id = e.target.getAttribute('data-key');
  console.log(id);
  const token = localStorage.getItem('token');
  axios.post(`https://api.betaseries.com/shows/show?id=${id}&token=${token}&key=e4c6631861be`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
})
}

  render() {
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('id'));
    const isLoggedIn = localStorage.getItem('logged');
    return (
      <div class='body'>
      <div class="container">
        <h4>Séries à découvrir</h4>
        <div class="col">
         {this.state.data.map((serie,i) =>
        <div class="hovereffect">
        <img class="img-responsive" src={`https://api.betaseries.com/pictures/shows?v=3.0&id=${serie.id}&key=e4c6631861be`} alt=""></img>
        <div class="overlay">
           <h2>{serie.title}</h2>         
        </div>
        {isLoggedIn !== 'false' ? (
            <a class="info" ><i data-key={serie.id} onClick={this.ajouter}class="fas fa-plus-circle plus fa-2x"></i></a>
        ) : (
          null
        )

        }
        <Link to={'/Show/'+ serie.id} class="info"><i data-key={serie.id} class="fas fa-info-circle plus fa-2x"></i></Link>
    {/* href={'/Show/'+ serie.id} */}
    </div>

      )}
      </div>
      </div>
      </div>
    );
  }
}

export default Home;
