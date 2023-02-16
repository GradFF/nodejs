module.exports = router => {
  const notes = require('../controllers/note.controller.js')

  // create a new Note
  router.post('/notes', notes.create)
  // Retrieve all Notes
  router.get('/notes', notes.get)
  // Retrieve a single Note with noteId
  router.get('/notes/:noteId', notes.find)
  // Update Note with noteId
  router.put('/notes/:noteId', notes.update)
  // Delete Note with noteId
  router.delete('/notes/:noteId', notes.delete)
}
