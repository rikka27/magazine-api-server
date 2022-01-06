const createError = require('http-errors');
const articleRoute = require('./route.article');
const authorRoute = require('./route.author');
const categoryRoute = require('./route.category');

module.exports = (app) => {
  app.use('/api/article', articleRoute);
  app.use('/api/author', authorRoute);
  app.use('/api/category', categoryRoute);

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
};
