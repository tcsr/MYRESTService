require('babel-register');

const start = () => {
  const app = require('./index');
  console.log('app', app);
  const port = process.env.PORT || 8080;
  app.createServer().listen(port, function onListen(err) {
    if (err) throw err;
    console.info('Mock server started on Port %s', this.address().port);
  });
};

start();


