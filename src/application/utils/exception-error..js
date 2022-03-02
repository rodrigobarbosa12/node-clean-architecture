const ExceptionError = (message, code) => Object
  .assign(new Error(), { message, code });

module.exports = ExceptionError;
