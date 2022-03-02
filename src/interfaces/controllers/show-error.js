const showError = require('../../application/use-cases/show-error');

const create = async (req, res) => {
  try {
    showError();

    return res.send();
  } catch (error) {
    return res.status(error.code ? error.code : 400).json(error);
  }
};

module.exports = {
  create,
}
