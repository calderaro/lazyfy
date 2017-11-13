import mongoose, {Schema} from 'mongoose'

const AlbumSchema = Schema({
  name: String,
  year: Number,
  track: Number,
  image: String,
  artist: {type: Schema.ObjectId, ref: 'artist'}
})

export default mongoose.model('album', AlbumSchema, 'albums')
