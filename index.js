const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

const app = express();

dotenv.config({path: '.env'});
const PORT = process.env.PORT || 8080

// Log requests
app.use(morgan('tiny'));

app.use(express.json());
// Parse url encoded bodies
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs');

// Load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})