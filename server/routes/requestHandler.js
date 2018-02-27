const actions = {
  GET: function respondToGETRequest(req, res) {
    res.send(`got the GET for id: ${req.params.id}`);
  },
};

const requestHandler = (req, res) => {
  if (actions[req.method]) {
    actions[req.method](req, res);
  } else {
    res.status(404).send();
  }
};

module.exports.requestHandler = requestHandler;
