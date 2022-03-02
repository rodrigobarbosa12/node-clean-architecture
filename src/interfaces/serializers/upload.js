const render = (data) => data.map((item) => ({ ...item, serializado: true }));

module.exports = render;
