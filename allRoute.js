var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

function allRoute(app) {
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    return app;
}

module.exports = allRoute;