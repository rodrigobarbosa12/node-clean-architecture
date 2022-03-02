const { ExceptionError } = require('../utils');

const showError = () => {
   throw ExceptionError('Erro 400', 400);

   console.log('Esse coódigo não será executado');
};

module.exports = showError;
