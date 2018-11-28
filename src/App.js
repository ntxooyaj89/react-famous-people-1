import React, { Component } from 'react';
import Header from './Components/Header/Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    user: {
      name: '',
      role: ''
    }
  }

  famousPeople = (propertyName)=>{
    console.log('this is famousPeolpe');
    return (event)=>{
      console.log('this is event handler');
      this.setState({
        user:{
          ...this.state.user,
          [propertyName] : event.target.value
        }
      })

    }
  }



  render() {
    return (
      <div>
      <Header />
      <input type='text' onChange={this.famousPeople('name')} />
      <input type='text' onChange={this.famousPeople('role')} />
      <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
  }
  

export default App;
