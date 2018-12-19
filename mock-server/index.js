const createServer =  require('@wize/koa-server');
const superstatic =  require('superstatic');
const c2k  = require('koa-connect');

const app = createServer({});

const setupRoutes = (app) => {
  const configRoutes = require('./config.json');
  Object.keys(configRoutes).forEach(path => {
    const config = configRoutes[path];
    if (config['*']) {
      let methods = ['get', 'post', 'patch', 'delete'];
      let response = config['*'];
      methods.forEach(method => {
        app.route(path)[method](async ctx => {
          ctx.body = require('./data/' + response);
          ctx.set('SecurityToken', 'HuiweWj9GhBSc8gC7UNnZsKro9dDCWMkT7pUL169Ysbm+peLvJub21fdUyaYu2rgouzSxc6bchfur1CtCUsP96Z8jxLF8+ew4kejpoR5AQK7a5Npxw3BQjk1cSg1PORE');
          ctx.set('access-control-allow-origin', '*');
          ctx.set('access-control-expose-headers', 'accept,SecurityToken');
        });
      });
    } else {
      Object.keys(config).forEach(method => {
        const response = config[method];
        app.route(path)[method.toLowerCase()](async ctx => {
          ctx.body = require('./data/' + response);
          ctx.set('SecurityToken', 'HuiweWj9GhBSc8gC7UNnZsKro9dDCWMkT7pUL169Ysbm+peLvJub21fdUyaYu2rgouzSxc6bchfur1CtCUsP96Z8jxLF8+ew4kejpoR5AQK7a5Npxw3BQjk1cSg1PORE');
          ctx.set('access-control-allow-origin', '*');
          ctx.set('access-control-expose-headers', 'accept,SecurityToken');
        })
      });
    }
  });
};

const config = {
  config: {
    public: '../dist',
    rewrites: [{
      source: '!**/api/**',
      destination: '/index.html'
    }]
  },
  cwd: process.cwd(),
  compression: true
};

setupRoutes(app);

app.use(c2k(superstatic(config)));


module.exports = app;
