import React, { Component } from 'react';
import './Home.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom'


class Header extends Component {
  constructor(props)
  {
    super();
    this.state = {
        logIn : []
    }
  }

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
        {isLoggedIn !== 'false' ? (
            <ul>
                <li><a href='/'><i class="fas fa-home logo fa-3x"></i></a></li>
                <li><a href='/member'><i class="fas fa-film fa-3x logo"></i></a></li>
                <li class='float-right' onClick={this.ClearLocal}><a href='/connexion'><i class="fas fa-sign-out-alt fa-3x logo"></i></a></li>
            </ul>
        ) : (
        <ul>
            <li><a href='/'><i class="fas fa-home fa-3x logo"></i></a></li>
            <li class="float-right"><a href="/connexion"><i class="far fa-user fa-3x logo"></i></a></li>
        </ul> 
        )}
      </header>
    );
  }
}

export default Header;
