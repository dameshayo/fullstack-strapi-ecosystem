import { getMediaUrl } from '../services/api';

export const ArticleCard = ({ article, onSelect }) => {
  const { title, summary, category, cover, createdAt } = article;
  const coverUrl = cover?.url ? getMediaUrl(cover.url) : 'https://via.placeholder.com/600x400';

  return (
    <div
      onClick={() => onSelect(article)}
      className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col"
    >
      <div className="h-48 overflow-hidden bg-slate-100 relative">
        <img
          src={coverUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {category && (
          <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
            {category}
          </span>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 hover:text-indigo-600 transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 text-sm line-clamp-3 mb-4">
            {summary || 'No summary available.'}
          </p>
        </div>
        <div className="text-xs text-slate-400 font-medium">
          {new Date(createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </div>
      </div>
    </div>
  );
};
