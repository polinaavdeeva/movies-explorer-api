const { celebrate, Joi } = require('celebrate');
const { regExp } = require('../utils/constants');

const validateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(regExp),
    trailer: Joi.string().required().regex(regExp),
    thumbnail: Joi.string().required().regex(regExp),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const validateDeleteMovie = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().hex().length(24),
  }),
});

module.exports = {
  validateDeleteMovie,
  validateMovie,
};
