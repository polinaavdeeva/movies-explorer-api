const router = require('express').Router();

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movie');

const {
  validateDeleteMovie,
  validateMovie,
} = require('../middlewares/movieValidation');

router.get('/', getMovies);
router.post('/', validateMovie, createMovie);
router.delete('/:movieId', validateDeleteMovie, deleteMovie);

module.exports = router;
