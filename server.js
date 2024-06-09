const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = '77e07c59b2bb429583b87fe996a2384a';
const pageSize = 21; // Number of articles per page

app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route to handle requests to the root URL
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/home', (req, tes) => {
    res.render('index');
});

app.get('/stock', (req, res) => {
    res.render('stock');
});

app.get('/news', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                category: 'business',
                country: 'us',
                pageSize: pageSize,
                page: page,
                apiKey: apiKey
            }
        });
        const news = response.data.articles;
        const totalResults = response.data.totalResults;
        res.render('news', { news: news, page: page, totalResults: totalResults, pageSize: pageSize });
    } catch (error) {
        console.error('Error fetching news:', error.response ? error.response.data : error.message);
        res.status(500).send('Error fetching news');
    }
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
