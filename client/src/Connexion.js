import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
// import { Link } from 'react-router-dom'
var md5 = require('md5');


class Connexion extends Component {
  constructor(props)
  {
    super();
    this.state = {
      login : '',
      password : ''
    }
  }

connexion = (e) => {
  
    axios.post('https://api.betaseries.com/members/auth?key=e4c6631861be', 
        {login : this.state.login,
        password : md5(this.state.password)}
    ).then(function (response) {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('id', response.data.user.id);
        localStorage.setItem('logged', true);
        // this.props.history.push('/member');
        window.location.href = '/member'
      })
      .catch(function (error) {
        console.log(error);
    })
}

login = (e) => {
    const value = e.target.value;
    this.setState({login : value});
    console.log(this.state.login);
}

password = (e) => {
    const value = e.target.value; 
    this.setState({password : value});
    console.log(this.state.password);
}


  render() {
    return (
      <div class='body'>
      <div class="container">
        <h4>Connexion</h4>
        <div class="col form-group">
        <input type="text" class="form-control" placeholder="Login" onChange={this.login.bind(this)}></input>
        <input type="password" class="form-control" placeholder="password" onChange={this.password.bind(this)}></input>
        <center>
          <button type="submit" class='btn btn-danger btn-lg' onClick={this.connexion.bind(this)}>Connexion</button>
        </center>

      </div>
      </div>
      </div>
    );
  }
}

export default Connexion;
