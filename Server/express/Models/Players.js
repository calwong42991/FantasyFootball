const db = require('../../../Database');

class Player {
  static getAllPlayers() {
    return db.players.getAllPlayers();
  }

  static getAllKickers() {
    return db.players.getAllKickers();
  }

  static getAllDst() {
    return db.players.getAllDst();
  }
}

module.exports = Player;