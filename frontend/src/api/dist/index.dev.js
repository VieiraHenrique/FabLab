"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getUsersSessions = exports.deleteById = exports.updateById = exports.insertNew = exports.getBy = exports.getById = exports.getAll = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_axios["default"].defaults.withCredentials = true;

var api = _axios["default"].create({
  baseURL: 'http://localhost:8080'
});

var getAll = function getAll(route) {
  return api.get(route);
};

exports.getAll = getAll;

var getById = function getById(route, id) {
  return api.get("".concat(route, "/").concat(id));
};

exports.getById = getById;

var getBy = function getBy(route, email, payload) {
  return api.post("".concat(route, "/").concat(email), payload);
};

exports.getBy = getBy;

var insertNew = function insertNew(route, payload) {
  return api.post(route, payload);
};

exports.insertNew = insertNew;

var updateById = function updateById(route, id, payload) {
  return api.put("".concat(route, "/").concat(id), payload);
};

exports.updateById = updateById;

var deleteById = function deleteById(route, id) {
  return api["delete"]("".concat(route, "/").concat(id));
};

exports.deleteById = deleteById;

var getUsersSessions = function getUsersSessions(route) {
  return api.get("".concat(route));
};

exports.getUsersSessions = getUsersSessions;
var apis = {
  getAll: getAll,
  getById: getById,
  insertNew: insertNew,
  updateById: updateById,
  deleteById: deleteById,
  getBy: getBy,
  getUsersSessions: getUsersSessions
};
var _default = apis;
exports["default"] = _default;