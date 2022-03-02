const { Router } = require('express');
const upload = require('../controllers/upload');
const showError = require('../controllers/show-error');

const routes = Router();

/**
 * Upload
 */
 routes.post('/upload', upload.process);

/**
 * Error
 */
 routes.post('/show-error', showError.create);

module.exports = routes;
