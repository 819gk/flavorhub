import { useState } from 'react';
import { Plus, Star, Clock, Flame } from 'lucide-react';
import type { MenuItem } from '@/types';
import MenuCard from '@/components/MenuCard';

interface MenuGridProps {
  items: MenuItem[];
  sortBy: 'popular' | 'price-low' | 'price-high' | 'rating';
  onSortChange: (s: 'popular' | 'price-low' | 'price-high' | 'rating') => void;
  onAdd: (item: MenuItem) => void;
}

export default function MenuGrid({ items, sortBy, onSortChange, onAdd }: MenuGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
            {items.length > 0 ? `${items.length} dishes available` : 'No dishes found'}
          </h2>
          <p className="text-stone-500 text-sm mt-1">Freshly prepared with premium ingredients</p>
        </div>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as typeof sortBy)}
          className="px-4 py-2 rounded-full bg-white border border-stone-200 text-sm font-medium text-stone-700 focus:outline-none focus:ring-2 focus:ring-brand-400 cursor-pointer"
        >
          <option value="popular">Most Popular</option>
          <option value="rating">Highest Rated</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-stone-400 text-lg">No dishes match your search. Try a different keyword!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="animate-fade-in"
              style={{ animationDelay: `${Math.min(idx * 50, 400)}ms`, animationFillMode: 'backwards' }}
            >
              <MenuCard item={item} onAdd={onAdd} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
