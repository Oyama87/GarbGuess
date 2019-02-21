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
                <img 
                  src={garment.imageUrl}
                  style={{height: '75px', width: '75px'}}
                  alt={garment.name}
                />
              </li>
            )
          })
        }
      </ul>
    )
  }
}
