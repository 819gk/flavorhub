import {
  UtensilsCrossed, Beef, Pizza, Fish, Wheat, Leaf, CakeSlice, Coffee,
} from 'lucide-react';
import type { Category } from '@/types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  UtensilsCrossed, Beef, Pizza, Fish, Wheat, Leaf, CakeSlice, Coffee,
};

interface CategoryBarProps {
  categories: Category[];
  active: string;
  onChange: (id: string) => void;
}

export default function CategoryBar({ categories, active, onChange }: CategoryBarProps) {
  return (
    <div id="menu" className="sticky top-16 z-30 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map(cat => {
            const Icon = iconMap[cat.icon] ?? UtensilsCrossed;
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onChange(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all active:scale-95 ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-lg'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300 hover:bg-stone-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
