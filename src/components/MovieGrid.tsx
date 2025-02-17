
import React from 'react';
import MovieCard from './MovieCard';

interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  rating: number;
  status: 'watched' | 'unwatched' | 'watchlist';
}

interface MovieGridProps {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, onMovieClick }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 animate-fadeIn">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          imageUrl={movie.imageUrl}
          rating={movie.rating}
          status={movie.status}
          onClick={() => onMovieClick(movie)}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
