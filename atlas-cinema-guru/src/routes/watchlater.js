import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/dashboard.css';
import MovieCard from '../components/movies/moviecard';

const WatchLater = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('/api/titles/watchlater/')
            .then(response => {
                setMovies(response.data);
            }).catch(error => {
                console.error('Error fetching watch later movies:', error);
            });
    }, []);

    return (
        <div className="watchlater-page">
            <h1>Movies to Watch Later</h1>
            <ul>
                {movies.map(movie => (
                    <MovieCard key={movie.imdbId} movie={movie} />
                ))}
            </ul>
        </div>
    );
};

export default WatchLater;
