const express = require('express');

const app = express();

app.use(express.static('dist'));

const listener = app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${listener.address().port} ( http://localhost:${listener.address().port} )`);
});
