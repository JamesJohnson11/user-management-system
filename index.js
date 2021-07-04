const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('Crud app');
})

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
})