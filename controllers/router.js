// Map routes to controller functions
module.exports = function(router) {
  router.get('/error', function(req, resp) {
    throw new Error('Derp. An error occurred.');
  });
};
