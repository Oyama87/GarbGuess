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
                <span>Name: {garment.name}</span>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
