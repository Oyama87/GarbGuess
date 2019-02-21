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
      <ul 
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
      >
        {
          this.props.garments.map(garment => {
            return (
              <li key={garment.id} style={{margin: '0px 10px'}}>
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
