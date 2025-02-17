
import React from 'react';
import Header from '../components/Header';
import MovieGrid from '../components/MovieGrid';

// Mock data for initial display
const mockMovies = [
  {
    id: 1,
    title: "Inception",
    imageUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    rating: 4.8,
    status: 'watched' as const,
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    imageUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    rating: 4.9,
    status: 'watchlist' as const,
  },
  {
    id: 3,
    title: "The Dark Knight",
    imageUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 4.7,
    status: 'unwatched' as const,
  },
  {
    id: 4,
    title: "Pulp Fiction",
    imageUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    rating: 4.6,
    status: 'watched' as const,
  },
  {
    id: 5,
    title: "The Matrix",
    imageUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    rating: 4.5,
    status: 'watched' as const,
  },
];

const Index = () => {
  const handleMovieClick = (movie: any) => {
    console.log('Movie clicked:', movie);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent">
      <Header />
      <main className="container mx-auto py-8">
        <section className="mb-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-4 animate-slideDown">Discover Movies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-slideUp">
            Explore and track your favorite films. Create your personal movie catalog and never lose track of what you've watched.
          </p>
        </section>
        
        <MovieGrid movies={mockMovies} onMovieClick={handleMovieClick} />
      </main>
    </div>
  );
};

export default Index;
