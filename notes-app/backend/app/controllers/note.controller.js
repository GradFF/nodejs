const Note = require('../models/note.model.js')

// Create and Save a new Note
exports.create = (req, res) => {
  if (!req.body.content) {
    return res.status(400).send({
      message: 'Note content can not be empty'
    })
  }

  const note = new Note({
    title: req.body.title || 'Untitled Note',
    content: req.body.content
  })

  note
    .save()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      return res.status(500).send({
        message: err.message || 'Some error occurred while creating the Note.'
      })
    })
}
// Retrieve and return all notes from the database.
exports.get = (req, res) => {
  Note.find()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      return res.status(500).send({
        message: err.message || 'Some error occurred while retrieving note.'
      })
    })
}
// Find a single note with a noteId
exports.find = (req, res) => {
  Note.findById(req.params.noteId)
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: 'Note not found with id ' + req.params.noteId
        })
      }
      res.send(data)
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Note not found with id ' + req.params.noteId
        })
      }
      return res.status(500).send({
        message: 'Error retrieving note with id ' + req.params.noteId
      })
    })
}
// Update a note identified by the noteId in the request
exports.update = (req, res) => {
  Note.findByIdAndUpdate(
    req.params.noteId,
    {
      title: req.body.title || 'Untitled Note',
      content: req.body.content
    },
    { new: true }
  )
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: 'Note not found with id ' + req.params.noteId
        })
      }
      res.send(data)
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Note not found with id ' + req.params.noteId
        })
      }
      return res.status(500).send({
        message: 'Error retrieving note with id ' + req.params.noteId
      })
    })
}
// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
  Note.findByIdAndRemove(req.params.noteId)
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: 'Note not found with id ' + req.params.noteId
        })
      }
      res.send({ message: 'Note deleted successfully!' })
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Note not found with id ' + req.params.noteId
        })
      }
      return res.status(500).send({
        message: 'Error retrieving note with id ' + req.params.noteId
      })
    })
}
