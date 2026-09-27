import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import type { CartItem } from '@/types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export default function CartDrawer({
  isOpen, onClose, items, totalItems, totalPrice, onUpdateQuantity, onRemove, onCheckout,
}: CartDrawerProps) {
  const deliveryFee = totalPrice >= 25 || totalPrice === 0 ? 0 : 3.99;
  const finalTotal = totalPrice + deliveryFee;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-2xl z-50 transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-brand-500" />
            <h2 className="font-display text-lg font-bold text-stone-900">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full hover:bg-stone-100 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-stone-600" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center mb-4">
              <ShoppingBag className="w-10 h-10 text-stone-300" />
            </div>
            <p className="text-stone-500 font-medium mb-1">Your cart is empty</p>
            <p className="text-stone-400 text-sm">Add some delicious dishes to get started!</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.map(item => (
                <div
                  key={item.id}
                  className="flex gap-3 bg-stone-50 rounded-xl p-3 animate-scale-in"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-stone-900 text-sm leading-tight truncate">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="shrink-0 text-stone-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-brand-600 font-bold text-sm mt-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors active:scale-90"
                      >
                        <Minus className="w-3.5 h-3.5 text-stone-600" />
                      </button>
                      <span className="font-semibold text-stone-900 text-sm w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors active:scale-90"
                      >
                        <Plus className="w-3.5 h-3.5 text-stone-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-stone-200 p-4 space-y-3 bg-white">
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-500">Subtotal</span>
                <span className="font-semibold text-stone-900">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-500">Delivery Fee</span>
                <span className="font-semibold text-stone-900">
                  {deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
                </span>
              </div>
              {deliveryFee > 0 && (
                <p className="text-xs text-brand-600 bg-brand-50 rounded-lg px-3 py-2">
                  Add ${(25 - totalPrice).toFixed(2)} more for free delivery!
                </p>
              )}
              <div className="flex items-center justify-between border-t border-stone-100 pt-3">
                <span className="font-display font-bold text-stone-900">Total</span>
                <span className="font-display text-xl font-bold text-stone-900">
                  ${finalTotal.toFixed(2)}
                </span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 active:scale-95 transition-all shadow-lg shadow-brand-500/30"
              >
                Checkout
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
