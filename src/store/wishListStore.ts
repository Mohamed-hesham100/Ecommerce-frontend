import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
}

interface WishlistStore {
  items: WishlistItem[];
  addItem: (product: any) => void;
  removeItem: (id: number) => void;
  clearWishlist: () => void;
  isInWishlist: (id: number) => boolean;
  getItemCount: () => number;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product) => {
        const existingItem = get().items.find(item => item.id === product.id);
        
        if (!existingItem) {
          set(state => ({
            items: [...state.items, {
              id: product.id,
              name: product.name,
              price: product.price,
              originalPrice: product.originalPrice,
              image: product.image,
              rating: product.rating,
              reviews: product.reviews
            }]
          }));
        }
      },
      
      removeItem: (id) => {
        set(state => ({
          items: state.items.filter(item => item.id !== id)
        }));
      },
      
      clearWishlist: () => {
        set({ items: [] });
      },
      
      isInWishlist: (id) => {
        return get().items.some(item => item.id === id);
      },
      
      getItemCount: () => {
        return get().items.length;
      }
    }),
    {
      name: 'wishlist-storage'
    }
  )
);