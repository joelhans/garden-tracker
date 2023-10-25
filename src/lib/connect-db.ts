import Mongoose from 'mongoose'

const { MONGODB_URI } = process.env
if (!MONGODB_URI) throw new Error('MONGODB_URI is not defined in environment.')

let cached = global.mongoose
if (!cached) cached = global.mongoose = { conn: null }

const connectMongo = async () => {
  if (cached.conn) return cached.conn

  cached.conn = await Mongoose.connect(MONGODB_URI)
  
  return cached.conn
}

export default connectMongo
