import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './movies.css';

const MovieCard = ({ movie }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isWatchLater, setIsWatchLater] = useState(false);

    useEffect(() => {
        // Fetch favorite and watch later status
        axios.get('/api/titles/favorite/')
            .then(response => {
                if (response.data.some(favMovie => favMovie.imdbId === movie.imdbId)) {
                    setIsFavorite(true);
                }
            })
            .catch(error => {
                console.error('Error fetching favorite movies:', error);
            });

        axios.get('/api/titles/watchlater/')
            .then(response => {
                if (response.data.some(watchLaterMovie => watchLaterMovie.imdbId === movie.imdbId)) {
                    setIsWatchLater(true);
                }
            })
            .catch(error => {
                console.error('Error fetching watch later movies:', error);
            });
    }, [movie.imdbId]);

    const handleClick = (type) => {
        const url = `/api/titles/${type}/${movie.imdbId}`;
        const isCurrently = type === 'favorite' ? isFavorite : isWatchLater;
        const setState = type === 'favorite' ? setIsFavorite : setIsWatchLater;

        if (isCurrently) {
            axios.delete(url)
                .then(() => setState(false))
                .catch(error => console.error(`Error removing from ${type}:`, error));
        } else {
            axios.post(url)
                .then(() => setState(true))
                .catch(error => console.error(`Error adding to ${type}:`, error));
        }
    };

    return (
        <li className="movie-card">
            <div className="icons">
                <FontAwesomeIcon
                    icon={faStar}
                    className={`icon ${isFavorite ? 'selected' : ''}`}
                    onClick={() => handleClick('favorite')}
                />
                <FontAwesomeIcon
                    icon={faClock}
                    className={`icon ${isWatchLater ? 'selected' : ''}`}
                    onClick={() => handleClick('watchlater')}
                />
            </div>
            <h2>{movie.title}</h2>
            <p>{movie.synopsis}</p>
            <p>Genres: {movie.genres.join(', ')}</p>
        </li>
    );
};

export default MovieCard;
