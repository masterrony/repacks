import { Schema, model } from 'mongoose'

const RepackSchema = new Schema({
  title: String,
  tags: String,
  companies: String,
  languages: String,
  detail: String,
  original_size: Number,
  repacked_size: Number,
  image: String,
  file: String,
  date: { type: Date, default: Date.now }
})

const Repack = model('Repack', RepackSchema)

export default Repack