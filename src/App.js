import React, { Component } from 'react';
import Wardrobe from './components/wardrobe'
import {setGarments} from './store/reducer'
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      garments: []
    }
  }
  
  async componentDidMount() {
    try {
      const {data} = await Axios.get('http://localhost:8080/api/garments/')
      setGarments(data)
    }
    catch(err) {
      console.error(err)
      alert('There was a network error!')
    }
  }
  
  render() {
    return (
      <div className="App">
       <header>
         <h1>Welcome to GarbGuess, your personal wardrobe assistant!</h1>
       </header>
       
       <main>
         <div className='main-container'>
           <button className='primary-button'>Add item to wardrobe</button>
         </div>
         
         <div className='wardrobe-container'>
           <Wardrobe garments={this.state.garments}/>
         </div>
       </main>
      </div>
    );
  }
}

export default App;
