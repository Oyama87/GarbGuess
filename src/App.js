import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      garments: []
    }
  }
  
  componentDidMount() {
    
  }
  
  render() {
    return (
      <div className="App">
       <header>
         <h1>Welcome to GarbGuess, you personal wardrobe assistant!</h1>
       </header>
       
       <main>
         <div className='main-container'>
           <button className='primary-button'>View Wardrobe</button>
         </div>
       </main>
      </div>
    );
  }
}

export default App;
