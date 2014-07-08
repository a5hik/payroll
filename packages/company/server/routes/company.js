'use strict';

var company = require('../controllers/company');

// Company authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && req.company.user.id !== req.user.id) {
    return res.send(401, 'User is not authorized');
  }
  next();
};

module.exports = function(Company, app, auth) {

  app.route('/company')
    .get(company.all)
    .post(auth.requiresLogin, company.create);
  app.route('/company/:companyId')
    .get(company.show)
    .put(auth.requiresLogin, hasAuthorization, company.update)
    .delete(auth.requiresLogin, hasAuthorization, company.destroy);

  // Finish with setting up the companyId param
  app.param('companyId', company.company);
};
