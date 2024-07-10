import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/dashboard.css';
import MovieCard from '../components/movies/moviecard';

const Favorites = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('/api/titles/favorite/')
            .then(response => {
                setMovies(response.data);
            }).catch(error => {
                console.error('Error fetching favorite movies:', error);
            });
    }, []);

    return (
        <div className="favorites-page">
            <h1>Movies you like</h1>
            <ul>
                {movies.map(movie => (
                    <MovieCard key={movie.imdbId} movie={movie} />
                ))}
            </ul>
        </div>
    );
};

export default Favorites;
