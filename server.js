const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route to handle requests to the root URL
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/stock', (req, res) => {
    res.render('stock');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
