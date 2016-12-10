'use strict'

const Transform = require('stream').Transform

module.exports = function (site) {
  const transform = new Transform()
  transform._transform = function (chunk, encoding, callback) {
    let ipString = chunk.toString().split('\n').find(function (domain) {
      return domain.match(`^${site}`)
    })

    transform.push(ipString.split(':')[1])
  }

  return transform
}
