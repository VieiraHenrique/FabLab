"use strict";

var User = require('../models/User');
var bcrypt = require('bcrypt');
var saltRounds = 10;

// User management
exports.getAllUser = function _callee(req, res) {
  var users;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.find());

        case 3:
          users = _context.sent;
          res.json(users);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0); // notifier l'utilisateur d'une erreur, et définir un comportement pour l'app

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};


// Session management
exports.getSessionUser = function _callee2(req, res, next) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('befor');
          console.log(req.session.user);
          console.log('after');

          if (req.session.user) {
            res.send({
              loggedIn: true,
              user: req.session.user
            });
          } else {
            res.send({
              loggedIn: false
            });
          }

          next();

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.authUser = function _callee3(req, res) {
  var email;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          email = req.params.email;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }, function (err, doc) {
            if (err) throw err;

            if (!doc) {
              res.status(403).json({
                message: 'The user is not register.'
              });
              console.log('The user is not register.');
            } else {
              bcrypt.compare(req.body.password, doc.password, function (err, result) {
                if (result) {
                  console.log('you are logged in as ' + doc.lastname);
                  req.session.user = doc;
                  console.log(req.session);
                  res.status(200).json({
                    loggedIn: true,
                    message: "Login Successfuly!",
                    user: req.session.user
                  });
                } else if (err) {
                  res.status(403).json({
                    message: 'incorrect password.'
                  });
                  console.log('incorrect password ' + user.password);
                }
              });
            }
          }));

        case 4:
          _context3.next = 9;
          break;

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0); // notifier l'utilisateur d'une erreur, et définir un comportement pour l'app

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 6]]);
};

exports.getUser = function _callee4(req, res) {
  var email;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          email = req.params.email;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }, function (err, doc) {
            if (err) throw err;

            if (!doc) {
              console.log('User not found');
              res.send({
                message: 'User not found!'
              });
            } else {
              console.log(req.doc);
              res.json(doc);
            }
          }));

        case 4:
          _context4.next = 9;
          break;

        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0); // notifier l'utilisateur d'une erreur, et définir un comportement pour l'app

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 6]]);
};

exports.postUser = function (req, res) {
  var _req$body = req.body,
      firstname = _req$body.firstname,
      lastname = _req$body.lastname,
      email = _req$body.email,
      tel = _req$body.tel,
      password = _req$body.password,
      company = _req$body.company,
      reservation = _req$body.reservation,
      invoice = _req$body.invoice,
      usertype = _req$body.usertype;
  var user = new User({
    firstname: firstname,
    lastname: lastname,
    email: email,
    tel: tel,
    password: password,
    company: company,
    reservation: reservation,
    invoice: invoice,
    usertype: usertype
  });
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(user.password, salt, function (err, hash) {
      user.password = hash;

      try {
        user.save();
        // définir le comportement de l'app en cas de réussite
      } catch (error) {
        console.log(error);
        // définir le comportement de l'app en cas d'erreur
      }
    });
  });
};
exports.getEditUser = (req, res) => {
  // TDB
}


exports.postEditUser = function (req, res) {
  // TDB
  var userId = req.body.petId;
  var _req$body2 = req.body,
      firstname = _req$body2.firstname,
      lastname = _req$body2.lastname,
      email = _req$body2.email,
      company = _req$body2.company;
  User.findById(userId).then(function (user) {
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.company = company;
    return user.save();
  }).then(function () {
    console.log('User Updated'); // définir le comportement de l'app en cas de réussite
  })["catch"](function (err) {
    console.log(err); // définir le comportement de l'app en cas d'erreur
  });
};

exports.postDeleteUser = function _callee5(req, res) {
  var userId, _user;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          // A GERE UNIQUEMENT ADMIN AURA DROIT
          userId = req.body.userId;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(User.findByIdAndDelete(userId, function (user) {
            return user;
          }));

        case 4:
          _user = _context5.sent;
          console.log(_user);
          console.log('User Deleted'); // définir le comportement de l'app en cas de réussite

          _context5.next = 12;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](1);
          console.log(_context5.t0); // définir le comportement de l'app en cas d'erreur

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 9]]);
};