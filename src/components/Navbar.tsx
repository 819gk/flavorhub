import { ShoppingBag, Search, Flame } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function Navbar({ cartCount, onCartClick, searchQuery, onSearchChange }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/30">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <span className="font-display text-xl font-bold text-stone-900 hidden sm:block">
              Flavor<span className="text-brand-600">Hub</span>
            </span>
          </div>

          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search for dishes..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-sm text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500 text-white font-medium text-sm hover:bg-brand-600 active:scale-95 transition-all shadow-md shadow-brand-500/30"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-stone-900 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce-in">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search for dishes..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-sm text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
