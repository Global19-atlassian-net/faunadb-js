'use strict'

/**
 * Used for functions that take an options objects.
 * Fills in defaults for options not provided.
 * Throws errors for provided options that aren't recognized.
 * A default value of `undefined` is used to indicate that the option must be provided.
 * @private
 */
function applyDefaults(provided, defaults) {
  var out = {}

  for (var providedKey in provided) {
    if (!(providedKey in defaults)) {
      throw new Error('No such option ' + providedKey)
    }
    out[providedKey] = provided[providedKey]
  }

  for (var defaultsKey in defaults) {
    if (!(defaultsKey in out)) {
      out[defaultsKey] = defaults[defaultsKey]
    }
  }

  return out
}

/**
 * Returns a new object without any keys where the value would be null or undefined.
 * @private
 * */
function removeNullAndUndefinedValues(object) {
  var res = {}
  for (var key in object) {
    var val = object[key]
    if (val !== null && val !== undefined) {
      res[key] = val
    }
  }
  return res
}

/**
 * Returns a new object without any keys where the value would be undefined.
 * @private
 * */
function removeUndefinedValues(object) {
  var res = {}
  for (var key in object) {
    var val = object[key]
    if (val !== undefined) {
      res[key] = val
    }
  }
  return res
}

/**
 * Returns a boolean stating if the given object has a given property
 * @private
 * */
function checkInstanceHasProperty(obj, prop) {
  return typeof obj === 'object' && obj !== null && Boolean(obj[prop])
}

module.exports = {
  applyDefaults: applyDefaults,
  removeNullAndUndefinedValues: removeNullAndUndefinedValues,
  removeUndefinedValues: removeUndefinedValues,
  checkInstanceHasProperty: checkInstanceHasProperty,
}
