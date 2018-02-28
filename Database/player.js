const client = require('./config');

// player_fantasy_stats
// kicker_fantasy_stats
// dst_fantasy_stats

class Players {
  static getPlayers () {
    client.connect()
    .then(() => {
      const query = `SELECT * FROM player_fantasy_stats`;
      return client.execute(query);
    })
    .then((data) => {
      console.log('DATA ', data);
      console.log('Shutting down');
      return client.shutdown();
    })
    .catch((error) => {
      console.log('ERROR ', error);
      console.log('Shutting down');
      return client.shutdown();
    })
  }
  static getKicker () {
    client.connect()
    .then(() => {
      const query = `SELECT * FROM kicker_fantasy_stats`;
      return client.execute(query);
    })
    .then((data) => {
      console.log('DATA ', data);
      console.log('Shutting down');
      return client.shutdown();
    })
    .catch((error) => {
      console.log('ERROR ', error);
      console.log('Shutting down');
      return client.shutdown();
    })
  }
  static getDst () {
    client.connect()
    .then(() => {
      const query = `SELECT * FROM dst_fantasy_stats`;
      return client.execute(query);
    })
    .then((data) => {
      console.log('DATA ', data);
      console.log('Shutting down');
      return client.shutdown();
    })
    .catch((error) => {
      console.log('ERROR ', error);
      console.log('Shutting down');
      return client.shutdown();
    })
  }
}

module.exports = Players;