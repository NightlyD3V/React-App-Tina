import React, { Component } from 'react';
import axios from 'axios';

const initialUser = {
  username: '',
  password: '',
}

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { ...initialUser },
      message: ''
    }
  }

  inputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ user: { ...this.state.user, [name]: value } })
  }

  submitHandler = (event) => {
      axios.post('https://dad-jokes2019.herokuapp.com/oauth/token', `grant_type=password&username=${this.state.user.username}&password=${this.state.user.password}`, {
  
        headers: {
  
          // btoa is converting our client id/client secret into base64
          Authorization: `Basic ${btoa('dadjoke-client:lambda-secret')}`,
          'Content-Type': 'application/x-www-form-urlencoded'
  
        }
  
      })
        .then(res => {
          localStorage.setItem('token', res.data.access_token);
          console.log(res.data.access_token);
  
        })
        .catch(err => console.dir(err));
  
      event.preventDefault();
  
    }

  render() {
    return (
      <div className='login'>
        <form onSubmit={this.submitHandler}>
          <section>
            <h1>Welcome!<br/> Please register:</h1>
          </section>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            value={this.state.user.username}
            onChange={this.inputHandler}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='text'
            id='password'
            name='password'
            value={this.state.user.password}
            onChange={this.inputHandler}
          />
            <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.user.email}
            onChange={this.inputHandler}
            placeholder="(optional)"
          />
          <button className="login-btn" type='submit'>Submit</button>
        </form>
        {this.state.message
          ? (<h4>{this.state.message}</h4>)
          : undefined
        }
      </div>
    )
  }
} 

export default Register;
