import React, {Component} from 'react'
import axios from 'axios'

export default class AddItemForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      region: '',
      color: '',
      warmth: '',
      formality: '',
      resistance: '',
      imageUrl: ''
    }
  }
  
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  
  handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/api/garments", this.state)
      this.setState({
        name: '',
        description: '',
        region: '',
        color: '',
        warmth: '',
        formality: '',
        resistance: '',
        imageUrl: ''
      })
    }
    catch(err) {
      console.error(err)
      alert('Submission Failed!')
    }
  }
  
  render() {
    return (
      <div className="add-form">
        <form style={{display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
        
          <label htmlFor="name">Name:</label>
          <input value={this.state.name} type="text" name="name" placeholder="Name of Garment" onChange={this.handleChange}/>
          
          <label htmlFor="description">Description:</label>
          <input value={this.state.description} type="text" name="description" placeholder="Description" onChange={this.handleChange}/>
          
          <label htmlFor="region">Region:</label>
          <input value={this.state.region} type="text" name="region" placeholder="Legs, Torso, Feet, etc." onChange={this.handleChange}/>
          
          <label htmlFor="color">Color:</label>
          <input value={this.state.color} type="text" name="color" placeholder="White, Black, etc." onChange={this.handleChange}/>
          
          <label htmlFor="warmth">Warmth:</label>
          <input value={this.state.warmth} type="text" name="warmth" placeholder="Warm weather, Cold weather, etc." onChange={this.handleChange}/>
          
          <label htmlFor="formality">Formality:</label>
          <input value={this.state.formality} type="text" name="formality" placeholder="Casual, Business, etc." onChange={this.handleChange}/>
          
          <label htmlFor="resistance">Resistance:</label>
          <input value={this.state.resistance} type="text" name="resistance" placeholder="Rain, Snow, None, etc." onChange={this.handleChange}/>
          
          <label htmlFor="imageUrl">Image:</label>
          <input value={this.state.imageUrl} type="text" name="imageUrl" placeholder="Url of garment image" onChange={this.handleChange}/>
          
          <button type="submit" onClick={this.handleSubmit}>Submit Garment</button>
        </form>
      </div>
    )
  }
}
