'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Company = mongoose.model('Company'),
  _ = require('lodash');


/**
 * Find company by id
 */
exports.company = function(req, res, next, id) {
  Company.load(id, function(err, company) {
    if (err) return next(err);
    if (!company) return next(new Error('Failed to load company ' + id));
    req.company = company;
    next();
  });
};

/**
 * Create a company
 */
exports.create = function(req, res) {
  var company = new Company(req.body);
  company .user = req.user;

  company .save(function(err) {
    if (err) {
      return res.jsonp(500, {
        error: 'Cannot save the company'
      });
    }
    res.jsonp(company);

  });
};

/**
 * Update a company
 */
exports.update = function(req, res) {
  var company = req.company;

  company = _.extend(company, req.body);

  company.save(function(err) {
    if (err) {
      return res.jsonp(500, {
        error: 'Cannot update the company'
      });
    }
    res.jsonp(company);

  });
};

/**
 * Delete a company
 */
exports.destroy = function(req, res) {
  var company = req.company;

  company.remove(function(err) {
    if (err) {
      return res.jsonp(500, {
        error: 'Cannot delete the company'
      });
    }
    res.jsonp(company);

  });
};

/**
 * Show a company
 */
exports.show = function(req, res) {
  res.jsonp(req.company);
};

/**
 * List of Companies
 */
exports.all = function(req, res) {
  Company.find().sort('-created').populate('user', 'name username').exec(function(err, companies) {
    if (err) {
      return res.jsonp(500, {
        error: 'Cannot list the companies'
      });
    }
    res.jsonp(companies);

  });
};
