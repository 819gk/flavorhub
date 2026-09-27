import { useState, useMemo } from 'react';
import { useCart } from '@/hooks/useCart';
import { menuItems, categories } from '@/data/menu';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryBar from '@/components/CategoryBar';
import MenuGrid from '@/components/MenuGrid';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import CheckoutModal from '@/components/CheckoutModal';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'rating'>('popular');
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const cart = useCart();

  const filteredItems = useMemo(() => {
    let items = menuItems.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    switch (sortBy) {
      case 'price-low': items = [...items].sort((a, b) => a.price - b.price); break;
      case 'price-high': items = [...items].sort((a, b) => b.price - a.price); break;
      case 'rating': items = [...items].sort((a, b) => b.rating - a.rating); break;
      case 'popular': items = [...items].sort((a, b) => Number(b.popular ?? false) - Number(a.popular ?? false)); break;
    }
    return items;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar
        cartCount={cart.totalItems}
        onCartClick={() => cart.setIsOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <Hero />
      <CategoryBar
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />
      <MenuGrid
        items={filteredItems}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onAdd={cart.addItem}
      />
      <Footer />
      <CartDrawer
        isOpen={cart.isOpen}
        onClose={() => cart.setIsOpen(false)}
        items={cart.items}
        totalItems={cart.totalItems}
        totalPrice={cart.totalPrice}
        onUpdateQuantity={cart.updateQuantity}
        onRemove={cart.removeItem}
        onCheckout={() => { cart.setIsOpen(false); setCheckoutOpen(true); }}
      />
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        totalPrice={cart.totalPrice}
        onComplete={() => { cart.clearCart(); setCheckoutOpen(false); }}
      />
    </div>
  );
}

export default App;
