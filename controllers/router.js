// Map routes to controller functions
module.exports = function(router) {
  router.get('/error', function(req, resp) {
    var errorMessage = 'Uh on an error happened';

    resp.status(500).send(errorMessage);
    throw new Error(errorMessage);
  });
};
