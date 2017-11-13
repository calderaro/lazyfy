import upload from '../helpers/upload'

const create = (req, res, next) =>
  upload(req).then(input => req.models.artist.create(input))
  .then(result => res.status(200).json(result))
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'hubo un problema'})})

const read = (req, res, next) =>
  req.models.artist.find(req.params.id ? {_id: req.params.id} : {})
  .then(result => res.status(200).json(result))
  .catch(err => res.status(500).json({message: 'hubo un problema'}))

const update = (req, res, next) =>
  upload(req).then(input => req.models.artist.findByIdAndUpdate(req.params.id, input, {new: true}))
  .then(result => res.status(200).json(result))
  .catch(err => res.status(500).json({message: 'hubo un problema'}))

const destroy = (req, res, next) =>
  req.models.artist.findByIdAndRemove(req.params.id)
  .then(result => res.status(200).json(result))
  .catch(err => res.status(500).json({message: 'hubo un problema'}))

module.exports = {
  create,
  read,
  update,
  destroy
}
