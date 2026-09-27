import { ArrowRight, Clock, Truck, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/4315148/pexels-photo-4315148.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-sm font-medium mb-6 animate-fade-in">
            <Star className="w-4 h-4 fill-brand-400 text-brand-400" />
            Rated #1 Food Delivery in the City
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 animate-slide-up">
            Delicious food,
            <br />
            <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
              delivered to your door
            </span>
          </h1>
          <p className="text-stone-300 text-lg mb-8 max-w-lg animate-slide-up">
            Order from the finest restaurants in town. Fresh ingredients, expert chefs, and lightning-fast delivery — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 active:scale-95 transition-all shadow-lg shadow-brand-500/30"
            >
              Order Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 active:scale-95 transition-all backdrop-blur-sm"
            >
              Browse Menu
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-10">
            <div className="flex items-center gap-2 text-stone-300">
              <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-brand-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">30 min</p>
                <p className="text-xs text-stone-400">Avg delivery</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-stone-300">
              <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center">
                <Truck className="w-5 h-5 text-brand-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Free</p>
                <p className="text-xs text-stone-400">Over $25</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-stone-300">
              <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center">
                <Star className="w-5 h-5 text-brand-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">4.9</p>
                <p className="text-xs text-stone-400">Customer rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
