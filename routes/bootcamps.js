const express = require('express');
const {
  getBootcamps,
  getBootcampById,
  createBootcamps,
  updateBootcampById,
  deleteBootcampById
} = require('./controllers/bootcamps');

const router = express.Router();

router.route('/').get(getBootcamps).post(createBootcamps);

router
  .route('/:id')
  .get(getBootcampById)
  .put(updateBootcampById)
  .delete(deleteBootcampById);

module.exports = router;
