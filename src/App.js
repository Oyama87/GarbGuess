import React, { Component } from 'react';
import Wardrobe from './components/wardrobe'
// import {setGarments} from './store/reducer'
import './App.css';
// import {connect} from 'react-redux'
import Axios from 'axios';
import AddItemForm from './components/AddItemForm'

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
      this.setState({
        garments: data
      })
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
         <div className='form-container'>
           <AddItemForm />
         </div>
         
         <div className='wardrobe-container'>
           <Wardrobe garments={this.state.garments}/>
         </div>
       </main>
      </div>
    );
  }
}

// const mapState = state => {
//   return {
//     garments: state.garments
//   }
// }

export default App

// export default connect(mapState, null)(App);
