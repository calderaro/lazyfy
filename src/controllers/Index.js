import {Router} from 'express'
import {err, notFound} from '../middlewares/error'
import authorize from '../middlewares/authorize'
import * as user from './Users'
import * as artists from './Artists'
import * as albums from './Albums'
import * as songs from './Songs'

const router = Router()
  .post('/login', user.auth)
  .post('/register', user.register)
  .use(authorize)
  .get('/artists/:id?', artists.read)
  .post('/artists', artists.create)
  .put('/artists/:id', artists.update)
  .delete('/artists/:id', artists.destroy)
  .post('/albums', albums.create)
  .get('/albums/:id?', albums.read)
  .put('/albums/:id', albums.update)
  .delete('/albums/:id', albums.destroy)
  .post('/songs', songs.create)
  .get('/songs/:id?', songs.read)
  .put('/songs/:id', songs.update)
  .delete('/songs/:id', songs.destroy)
  .use('*', notFound)
  .use(err)

export default router
