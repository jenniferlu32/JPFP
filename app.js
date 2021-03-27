const express = require('express');
const path = require('path');
const { models: { Student, Campus }, syncAndSeed } = require('./db/data');
const app = express();

app.use(express.json()) //to print out data from axios

//HTML
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')))

//front end index.js
app.use('/dist', express.static(path.join(__dirname, 'dist')));

//routes
app.use('/api', require('./api'));

const init = async() => {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on port ${port}`))
  } catch(err) {
    console.log(err);
  }
}
init();
