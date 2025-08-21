import React, { createContext } from 'react';

interface CartProviderProps {
  children: React.ReactNode;
}

const CartContext = createContext(null);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  return (
    <CartContext.Provider value={null}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;