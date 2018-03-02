const client = require('./config');

// player_fantasy_stats
// kicker_fantasy_stats
// dst_fantasy_stats

class Players {
  static getAllPlayers () {
    const query = `SELECT * FROM player_fantasy_stats`;
    return client.execute(query, { prepare: true})
      .then((data) => {
        return data.rows
      })
      .catch((error) => {
        console.log('ERROR ', error)
        return error
      })
  }

  static getAllKickers () {
    const query = `SELECT * FROM kicker_fantasy_stats`;
    return client.execute(query, { prepare: true})
      .then((data) => {
        return data.rows;
      })
      .catch((error) => {
        return error
      })
  }

  static getAllDst () {
    const query = `SELECT * FROM dst_fantasy_stats`;
    return client.execute(query, { prepare: true})
      .then((data) => {
        return data.rows
      })
      .catch((error) => {
        return error
      })
  }
}

module.exports = Players;