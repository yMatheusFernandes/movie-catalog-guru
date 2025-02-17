
import React from 'react';
import { Star, Eye, Clock, Plus } from 'lucide-react';

interface MovieCardProps {
  title: string;
  imageUrl: string;
  rating: number;
  status?: 'watched' | 'unwatched' | 'watchlist';
  onClick?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  imageUrl,
  rating,
  status = 'unwatched',
  onClick,
}) => {
  const statusIcon = {
    watched: <Eye className="w-4 h-4" />,
    unwatched: <Clock className="w-4 h-4" />,
    watchlist: <Plus className="w-4 h-4" />,
  };

  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
    >
      <div className="aspect-[2/3] overflow-hidden bg-gray-200">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{title}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-white">{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center rounded-full bg-white/20 px-2 py-1 text-xs text-white">
                {statusIcon[status]}
                <span className="ml-1 capitalize">{status}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
