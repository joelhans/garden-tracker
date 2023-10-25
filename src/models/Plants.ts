import { models, model, Schema, Types } from 'mongoose'

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

const Plant = models.Plant || model<PlantDocument>('Plant', PlantSchema)

export default Plant
