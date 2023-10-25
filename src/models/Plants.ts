import { models, model, Schema } from 'mongoose'

const PlantSchema: Schema = new Schema({
  species: {
    type: String,
    required: true,
  },
  zone: {
    type: String,
  },
  datePlanted: {
    type: Date,
  }
})

const Plant = models.Plant || model('Plant', PlantSchema)

export default Plant
