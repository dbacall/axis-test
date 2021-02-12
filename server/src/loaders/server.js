const bodyParser = require('body-parser');
const cors = require('cors');
var compression = require('compression');

module.exports = (app) => {
  app.use(cors());

  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );

  app.use(bodyParser.json());

  // compress all responses
  app.use(compression());

  const port = process.env.PORT || 5000;

  app.listen(port, () => console.log(`Server up and running on port ${port}!`));
};
