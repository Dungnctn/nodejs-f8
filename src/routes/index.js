const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
  // Action --> dispatcher --> function handler

  app.use('/news', newsRouter);

  app.use('/', siteRouter);
}

module.exports = route;
