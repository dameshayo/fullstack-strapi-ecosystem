import { X } from 'lucide-react';
import { getMediaUrl } from '../services/api';

export const ArticleModal = ({ article, onClose }) => {
  if (!article) return null;

  const { title, content, cover, category, createdAt } = article;
  const coverUrl = cover?.url ? getMediaUrl(cover.url) : null;

  // Render Strapi v5 Rich Text Blocks or raw text string safely
  const renderContent = (rawContent) => {
    if (!rawContent) return <p className="text-slate-500 italic">No content provided.</p>;

    if (typeof rawContent === 'string') {
      return <p className="text-slate-700 leading-relaxed whitespace-pre-line">{rawContent}</p>;
    }

    if (Array.isArray(rawContent)) {
      return rawContent.map((block, i) => {
        if (block.type === 'paragraph') {
          return (
            <p key={i} className="mb-4 text-slate-700 leading-relaxed">
              {block.children?.map((child) => child.text).join('')}
            </p>
          );
        }
        if (block.type === 'heading') {
          return (
            <h2 key={i} className="text-xl font-bold text-slate-900 mt-6 mb-3">
              {block.children?.map((child) => child.text).join('')}
            </h2>
          );
        }
        return null;
      });
    }

    return null;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-slate-600 hover:text-slate-900 shadow-md transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {coverUrl && (
          <div className="w-full h-72 bg-slate-100 relative flex-shrink-0">
            <img src={coverUrl} alt={title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="p-8">
          <div className="flex items-center space-x-3 mb-4">
            {category && (
              <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {category}
              </span>
            )}
            <span className="text-xs text-slate-400">
              {new Date(createdAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
            {title}
          </h1>

          <div className="prose max-w-none text-slate-700">
            {renderContent(content)}
          </div>
        </div>
      </div>
    </div>
  );
};
