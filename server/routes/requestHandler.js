const db = require('./../../db/db.js');

const actions = {
  GET: function respondToGETRequest(req, res) {
    db.findOneById(req.params.id, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
};

const requestHandler = (req, res) => {
  if (actions[req.method]) {
    actions[req.method](req, res);
  } else {
    res.sendStatus(404);
  }
};

module.exports.requestHandler = requestHandler;
