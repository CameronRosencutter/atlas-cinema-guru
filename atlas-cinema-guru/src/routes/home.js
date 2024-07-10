import React, { useState, useEffect } from 'react';
import '../components/dashboard.css';
import MovieCard from '../components/movies/moviecard';
import Filter from '../components/movies/filter';
import Button from '../components/general/Button';

const mockMovies = [
    {
        imdbId: '1',
        title: 'Mock Movie 1',
        synopsis: 'This is a synopsis for mock movie 1.',
        genres: ['action', 'drama']
    },
    {
        imdbId: '2',
        title: 'Mock Movie 2',
        synopsis: 'This is a synopsis for mock movie 2.',
        genres: ['comedy', 'romance']
    }
];

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [minYear, setMinYear] = useState(1970);
    const [maxYear, setMaxYear] = useState(2022);
    const [genres, setGenres] = useState([]);
    const [sort, setSort] = useState('');
    const [title, setTitle] = useState('');
    const [page, setPage] = useState(1);

    const loadMovies = (page) => {
        // Mock data fetching
        setMovies(prevMovies => [...prevMovies, ...mockMovies]);
    };

    useEffect(() => {
        setMovies([]); // Reset movies when filters change
        loadMovies(1); // Load first page of movies
    }, [minYear, maxYear, genres, title, sort]);

    useEffect(() => {
        loadMovies(page); // Load movies on page change
    }, [page]);

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
                onClick={() => setPage(prevPage => prevPage + 1)}
            />
        </div>
    );
};

export default HomePage;

