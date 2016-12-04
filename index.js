'use strict'

const Transform = require('stream').Transform
const transform = new Transform()

module.exports = function (site) {
  transform._transform = function (chunk, encoding, callback) {
    let ipString = chunk.toString().split('\n').find(function (domain) {
      return domain.match(`^${site}`)
    })

    transform.push(ipString.split(':')[1])
  }

  return transform
}
