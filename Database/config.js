"use strict";
const cassandra = require('cassandra-driver');
var PlainTextAuthProvider = cassandra.auth.PlainTextAuthProvider;

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1:9042'],
  authProvider: new PlainTextAuthProvider('calvinw', 'calvinwong'),
  keyspace: 'fantasy_football'
})

client.connect()
  .then(function () {
    console.log('Connected to cluster with %d host(s): %j', client.hosts.length, client.hosts.keys());
    console.log('Keyspaces: %j', Object.keys(client.metadata.keyspaces));
  })
  .catch(function (err) {
    console.error('There was an error when connecting', err);
    return client.shutdown();
  });

module.exports = client;