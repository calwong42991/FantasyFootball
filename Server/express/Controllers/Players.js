const models = require('../Models');

class Player {
  static getAllPlayers(req, res) {
    models.player.getAllPlayers()
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((error) => {
        res.send(error);
      })
  }

  static getAllKickers(req, res) {
    models.player.getAllKickers()
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((error) => {
        console.log('ERROR', error);
        res.send(error);
      })
  }

  static getAllDst(req, res) {
    models.player.getAllDst()
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        console.log('ERROR', error);
        res.send(error);
      })
  }
}

module.exports = Player;