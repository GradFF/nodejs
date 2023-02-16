module.exports = app => {
  const notes = require('../controllers/note.controller.js')

  // create a new Note
  app.post('/notes', notes.create)
  // Retrieve all Notes
  app.get('/notes', notes.get)
  // Retrieve a single Note with noteId
  app.get('/notes/:noteId', notes.find)
  // Update Note with noteId
  app.put('/notes/:noteId', notes.update)
  // Delete Note with noteId
  app.delete('/notes/:noteId', notes.delete)
}
