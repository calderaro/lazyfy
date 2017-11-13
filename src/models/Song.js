import mongoose, {Schema} from 'mongoose'

const SongSchema = Schema({
  track: Number,
  name: String,
  duration: String,
  file: String,
  album: {type: Schema.ObjectId, ref: 'Album'}
})

export default mongoose.model('song', SongSchema, 'songs')
