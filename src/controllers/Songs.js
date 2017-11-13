import upload from '../helpers/upload'

const create = (req, res, next) =>
  upload(req).then(input => req.models.song.create(input))
  .then(result => res.status(200).json(result))
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'Error al crear Canción'})
  })

const read = (req, res, next) =>
  req.models.song.find(req.params.id ? {_id: req.params.id} : {})
  .populate('album')
  .then(result => res.status(200).json(result))
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'Error al obtener Canción'})
  })

const update = (req, res, next) =>
  upload(req).then(input => req.models.song.findByIdAndUpdate(req.params.id, input, {new: true}))
  .then(result => res.status(200).json(result))
  .catch(err => res.status(500).json({message: 'Error al actualizar Canción'}))

const destroy = (req, res, next) =>
  req.models.song.findByIdAndRemove(req.params.id)
  .then(result => res.status(200).json(result))
  .catch(err => res.status(500).json({message: 'Error al eliminar Canción'}))

module.exports = {create, read, update, destroy}
