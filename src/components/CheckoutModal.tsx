import { useState } from 'react';
import { X, Check, CreditCard, MapPin, User, Phone } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalPrice: number;
  onComplete: () => void;
}

export default function CheckoutModal({ isOpen, onClose, totalPrice, onComplete }: CheckoutModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [card, setCard] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleClose = () => {
    setStep('form');
    setName('');
    setAddress('');
    setPhone('');
    setCard('');
    onClose();
  };

  const handleComplete = () => {
    setStep('form');
    setName('');
    setAddress('');
    setPhone('');
    setCard('');
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={handleClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-scale-in">
        {step === 'form' ? (
          <>
            <div className="flex items-center justify-between p-5 border-b border-stone-200">
              <h2 className="font-display text-xl font-bold text-stone-900">Checkout</h2>
              <button onClick={handleClose} className="w-9 h-9 rounded-full hover:bg-stone-100 flex items-center justify-center transition-colors">
                <X className="w-5 h-5 text-stone-600" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label className="text-sm font-medium text-stone-700 mb-1.5 block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-stone-700 mb-1.5 block">Delivery Address</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                  <textarea
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 Main St, Apt 4B, City"
                    rows={2}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-stone-700 mb-1.5 block">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 123-4567"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-stone-700 mb-1.5 block">Card Number</label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    required
                    value={card}
                    onChange={(e) => setCard(e.target.value.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})/g, '$1 ').trim())}
                    placeholder="4242 4242 4242 4242"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                <span className="text-stone-500 text-sm">Total to pay</span>
                <span className="font-display text-xl font-bold text-stone-900">
                  ${(totalPrice + (totalPrice >= 25 ? 0 : 3.99)).toFixed(2)}
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 active:scale-95 transition-all shadow-lg shadow-brand-500/30"
              >
                Place Order
              </button>
            </form>
          </>
        ) : (
          <div className="p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5 animate-bounce-in">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-2">Order Placed!</h2>
            <p className="text-stone-500 mb-1">Thank you, {name || 'friend'}!</p>
            <p className="text-stone-400 text-sm mb-6">
              Your delicious order is being prepared. Estimated delivery: 30 minutes.
            </p>
            <div className="bg-stone-50 rounded-xl p-4 mb-6 text-left">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-stone-500">Order Number</span>
                <span className="font-semibold text-stone-900">#FH{Math.floor(Math.random() * 90000 + 10000)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-500">Delivery to</span>
                <span className="font-semibold text-stone-900 truncate ml-2 max-w-[180px]">{address || 'Your address'}</span>
              </div>
            </div>
            <button
              onClick={handleComplete}
              className="w-full py-3 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 active:scale-95 transition-all shadow-lg shadow-brand-500/30"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
