import express from 'express';

import Book from '../models/Book';

const router = express.Router();

router.use((req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  next();
});

router.get('/books', async (req, res) => {
  try {
    const books = await Book.list({});
    res.json(books);
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
});

// more routes

module.exports = router;
