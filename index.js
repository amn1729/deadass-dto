// https://github.com/amn1729/deadass-dto

/**
 * Represents a base shape of Response info.
 * @typedef {Object} Resp
 * @property {number} status - The status code of the Response.
 * @property {boolean} success - The success status of the Response.
 * @property {string} message - The message of the Response.
 * @property {string} action - The action of the Response.
 */

/**
 * Represents a Response with a DTO data.
 * @class
 */
class Response {
  /**
   * The private response info for the Response.
   * @type {Resp}
   */
  #resp = {
    status: 200,
    success: true,
    message: "",
  };

  /**
   * Set the status code of the Response.
   * Also updates the success based on the code.
   * @param {number} code - The new status code of the Response.
   * @returns {Response} The Response.
   */
  status(code) {
    this.#resp.status = code;
    this.#resp.success = code >= 200 && code < 210;
    return this;
  }

  /**
   * Set the success code of the Response (must be called after `success`).
   * @param {boolean} status - The new status code of the Response.
   * @returns {Response} The Response.
   */
  success(success) {
    this.#resp.success = success;
    return this;
  }

  /**
   * Set the message of the Response.
   * @param {string} msg - The new message of the Response.
   * @returns {Response} The Response.
   */
  message(msg) {
    this.#resp.message = msg;
    return this;
  }

  /**
   * Set the type of the Response.
   * @param {string} t - The new message of the Response.
   * @returns {Response} The Response.
   */
  type(t) {
    this.#resp.type = t;
    return this;
  }

  /**
   * Set the action of the Response.
   * @param {string} name - The new action of the Response.
   * @returns {Response} The Response.
   */
  action(name) {
    this.#resp.action = name;
    return this;
  }

  /**
   * Set the metadata of the Response.
   * @param {Object} data - The new metadata of the Response.
   * @returns {Response} The Response.
   */
  metadata(data) {
    this.#resp.metadata = data;
    return this;
  }

  /**
   * Add key, value to the Response.
   * @param {string} key
   * @param {*} value
   * @returns {Response} The Response.
   */
  add(key, value) {
    this.#resp[key] = value;
    return this;
  }

  /**
   * Transforms the Response instance to object.
   * @returns {Object}
   */
  toJson() {
    return Object.assign({ ...this.#resp, data: this });
  }

  /**
   * Perform arbitary callback on the Response.
   * Calls this.toJson to transforms the data
   */
  callback(cb) {
    return cb(this.toJson());
  }
}

// export default Response;
module.exports = Response;
