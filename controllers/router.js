// Map routes to controller functions
module.exports = function(router) {
  router.get('/', function(req, resp) { return resp.send('hello'); });
};
