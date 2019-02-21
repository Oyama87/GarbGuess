import React, {Component} from 'react'

export default class Wardrobe extends Component {
  constructor() {
    super()
    this.state = {
      selectedGarments: []
    }
  }
  
  render() {
    return (
      <ul>
        {
          this.props.garments.map(garment => {
            return (
              <li key={garment.id}>
                <p>Name: {garment.name}</p>
                <img 
                  src={garment.imageUrl}
                  style={{height: '75px', width: '75px'}}
                  alt={garment.description}
                />
              </li>
            )
          })
        }
      </ul>
    )
  }
}
