const express = require('express');
const app = express();
const port = 3001; // Make sure this port is not the same as your React app

let favorites = [];
let watchLater = [];

app.use(express.json());

app.get('/api/titles/favorite', (req, res) => {
    res.json(favorites);
});

app.get('/api/titles/watchlater', (req, res) => {
    res.json(watchLater);
});

app.post('/api/titles/favorite/:imdbId', (req, res) => {
    const { imdbId } = req.params;
    if (!favorites.some(movie => movie.imdbId === imdbId)) {
        favorites.push({ imdbId });
    }
    res.sendStatus(200);
});

app.delete('/api/titles/favorite/:imdbId', (req, res) => {
    const { imdbId } = req.params;
    favorites = favorites.filter(movie => movie.imdbId !== imdbId);
    res.sendStatus(200);
});

app.post('/api/titles/watchlater/:imdbId', (req, res) => {
    const { imdbId } = req.params;
    if (!watchLater.some(movie => movie.imdbId === imdbId)) {
        watchLater.push({ imdbId });
    }
    res.sendStatus(200);
});

app.delete('/api/titles/watchlater/:imdbId', (req, res) => {
    const { imdbId } = req.params;
    watchLater = watchLater.filter(movie => movie.imdbId !== imdbId);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
