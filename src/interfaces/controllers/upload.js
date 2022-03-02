const service = require('../../application/use-cases/upload');
const render = require('../serializers/upload');

const process = async (req, res) => {
  try {
    const { files } = req.files;

    const result = await service.process(files);
    return res.send(render(result));
  } catch (error) {
    return res.status(error.code ? error.code : 400).json(error);
  }
};

module.exports = {
  process,
}
