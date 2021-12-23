const express = require('express');
const app = express();
const path = require('path');
const port = 2500;

// Seteando static

app.use(express.static('public'));

app.listen(port, () => console.log(`Listening on localhost:${port}`));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
});