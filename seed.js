const {Garment, db} = require('./src/server/db')

const pants = {
  name: 'Pants',
  description: 'Pants for everyday wear',
  color: 'black',
  region: 'legs',
  warmth: 'cool',
  formality: 'casual',
  resistance: 'low',
  imageUrl: 'https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwc19a496d/images/hi-res/82156_FGE.jpg?sw=750&sh=750&sm=fit&sfrm=png'
}

const seed = async (data) => {
  await db.sync({force: true})
  
  await Garment.create(
    pants
  )
  console.log('DB Successfully seeded!')
  db.close()
}

seed().catch(() => {
  console.error('DB Did Not Seed!')
  db.close()
})
