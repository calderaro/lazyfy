import upload from '../helpers/upload'

const create = (req, res, next) =>
  upload(req).then(input => req.models.album.create(input))
  .then(result => res.status(200).json(result))
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'Error al crear Album'})
  })

const read = (req, res, next) =>
  req.models.album.find(req.params.id ? {_id: req.params.id} : {})
  .populate('artist')
  .then(result => res.status(200).json(result))
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'Error al crear Album'})
  })

const update = (req, res, next) =>
  upload(req).then(input => req.models.album.findByIdAndUpdate(req.params.id, input, {new: true}))
  .then(result => res.status(200).json(result))
  .catch(err => res.status(500).json({message: 'Error al editar Album'}))

const destroy = (req, res, next) =>
  req.models.album.findByIdAndRemove(req.params.id)
  .then(result => res.status(200).json(result))
  .catch(err => res.status(500).json({message: 'Error al eliminar Album'}))

module.exports = {create, read, update, destroy}
