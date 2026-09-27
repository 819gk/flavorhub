import { useState } from 'react';
import { Plus, Star, Clock, Check } from 'lucide-react';
import type { MenuItem } from '@/types';

interface MenuCardProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

export default function MenuCard({ item, onAdd }: MenuCardProps) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {item.popular && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-brand-500 text-white text-xs font-bold flex items-center gap-1 shadow-lg">
            <Star className="w-3 h-3 fill-white" /> Popular
          </span>
        )}
        <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          {item.rating}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display font-bold text-stone-900 text-lg leading-tight mb-1">
          {item.name}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed mb-3 line-clamp-2 flex-1">
          {item.description}
        </p>

        <div className="flex items-center gap-3 mb-3">
          <span className="flex items-center gap-1 text-stone-400 text-xs">
            <Clock className="w-3.5 h-3.5" /> {item.prepTime}
          </span>
          {item.tags.slice(0, 1).map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-bold text-stone-900">
            ${item.price.toFixed(2)}
          </span>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold text-sm transition-all active:scale-95 ${
              added
                ? 'bg-green-500 text-white'
                : 'bg-brand-500 text-white hover:bg-brand-600 shadow-md shadow-brand-500/30'
            }`}
          >
            {added ? (
              <><Check className="w-4 h-4" /> Added</>
            ) : (
              <><Plus className="w-4 h-4" /> Add</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
