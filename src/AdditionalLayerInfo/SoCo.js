var AdditionalLayerInfo = require('../AdditionalLayerInfo');
var Descriptor = require('../Descriptor');

/**
 * @constructor
 */
AdditionalLayerInfo['SoCo'] = function() {
  /** @type {number} */
  this.offset;
  /** @type {number} */
  this.length;
  /** @type {number} */
  this.version;
  /** @type {*} */
  this.descriptor;
};

/**
 * @param {StreamReader} stream
 */
AdditionalLayerInfo['SoCo'].prototype.parse = function(stream) {
  this.offset = stream.tell();

  this.version = stream.readUint32();
  this.descriptor = new Descriptor();
  this.descriptor.parse(stream);

  this.length = stream.tell() - this.offset;
};
