import mongoose, {Schema} from 'mongoose'

const ArtistSchema = Schema({
  name: String,
  description: String,
  image: String
})

export default mongoose.model('artist', ArtistSchema, 'artists')
