import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom'


class Header extends Component {
  constructor(props)
  {
    super();
    this.state = {
        logIn : []
    }
  }

//   componentDidMount(){
//     axios.get(``)
//     .then(res => {
//         const info = res.data.shows;
//         this.setState({ logIn: info});
//     })
// }

ClearLocal = () => 
{
    localStorage.clear();
    localStorage.setItem('logged', false);

}

  render() {
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('id'));
    const isLoggedIn = localStorage.getItem('logged');
    return (
    <header class="body">  
        {/* <ul>
        <li><a href='/'><i class="fas fa-film fa-3x logo"></i></a></li>
        <li><a href='/'><i class="fas fa-home logo"></i></a></li>
        <li class="float-right"><a href="/connexion"><i class="far fa-user logo"></i></a></li>
        <li><a href="/member">Profil</a></li>
        <li onClick={this.ClearLocal}><a href='/connexion'>Déconnection</a></li>
        </ul>     */}
        {isLoggedIn ? (
            <ul>
                <li><a href='/'><i class="fas fa-film fa-3x logo"></i></a></li>
                <li><a href='/'><i class="fas fa-home logo fa-3x"></i></a></li>
                <li><a href="/member">Profil</a></li>
                <li class='float-right' onClick={this.ClearLocal}><a href='/connexion'>Déconnection</a></li>
            </ul>
        ) : (
        <ul>
            <li><a href='/'><i class="fas fa-film fa-3x logo"></i></a></li>
            <li><a href='/'><i class="fas fa-home fa-3x logo"></i></a></li>
            <li class="float-right"><a href="/connexion"><i class="far fa-user fa-3x logo"></i></a></li>
        </ul> 
        )}
      </header>
    );
  }
}

export default Header;
