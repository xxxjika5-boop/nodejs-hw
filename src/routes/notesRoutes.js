import { Router } from 'express';

import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from '../controllers/notesController.js';

const router = Router();

router.get('/notes', (req, res, next) => {
  console.log('ROUTE /notes WORKS');
  next();
}, getAllNotes);

router.get('/notes/:noteId', getNoteById);

router.post('/notes', createNote);

router.patch('/notes/:noteId', updateNote);

router.delete('/notes/:noteId', deleteNote);

export default router;


