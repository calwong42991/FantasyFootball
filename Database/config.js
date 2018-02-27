const axios = require('axios');

const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  keyspace: 'fantasy_football'
})

