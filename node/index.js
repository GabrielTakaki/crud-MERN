require('dotenv').config();
const path = require('path');
const cors = require('cors');
const express = require('express');
const router = require('./src/router');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 3001;

const app = express();
app.use(express.json());

const corsOptions = {
  origin: ['https://flexge.herokuapp.com', 'http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));

app.use(cookieParser());

app.get('/', (_req, res) => {
  res.status(200).send('Welcome to the FlexGE API!');
});

app.use(router);
app.use(express.static(path.join(__dirname, '..', 'uploads')));

app.use(require('./src/middleware/error'));

app.listen(port, () => console.log(`app listening on port ${port}`));
