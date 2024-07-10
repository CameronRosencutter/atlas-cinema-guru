import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/dashboard.css';
import MovieCard from '../components/movies/moviecard';
import Filter from '../components/movies/filter';
import Button from '../components/general/Button';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [minYear, setMinYear] = useState(1970);
    const [maxYear, setMaxYear] = useState(2022);
    const [genres, setGenres] = useState([]);
    const [sort, setSort] = useState('');
    const [title, setTitle] = useState('');
    const [page, setPage] = useState(1);

    const loadMovies = (page) => {
        axios.get('/api/titles/advancedsearch', {
            params: {
                minYear,
                maxYear,
                genres: genres.join(','),
                title,
                sort,
                page
            }
        }).then(response => {
            setMovies(prevMovies => [...prevMovies, ...response.data]);
        }).catch(error => {
            console.error('Error fetching movies:', error);
        });
    };

    useEffect(() => {
        setMovies([]); // Reset movies when filters change
        loadMovies(1); // Load first page of movies
    }, [minYear, maxYear, genres, title, sort]);

    return (
        <div className="home-page">
            <Filter
                minYear={minYear}
                setMinYear={setMinYear}
                maxYear={maxYear}
                setMaxYear={setMaxYear}
                sort={sort}
                setSort={setSort}
                genres={genres}
                setGenres={setGenres}
                title={title}
                setTitle={setTitle}
            />
            <ul>
                {movies.map(movie => (
                    <MovieCard key={movie.imdbId} movie={movie} />
                ))}
            </ul>
            <Button
                label="Load More.."
                className="load-more-button"
                onClick={() => {
                    setPage(prevPage => prevPage + 1);
                    loadMovies(page + 1);
                }}
            />
        </div>
    );
};

export default HomePage;
