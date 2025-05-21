
import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { CartItem, Product } from '../types';
import { useToast } from '../hooks/use-toast';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = useCallback((product: Product, quantity = 1) => {
    if (product.stockQuantity === 0) {
      toast({
        title: "Can't add to cart",
        description: "This item is out of stock",
        variant: "destructive"
      });
      return;
    }
    
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        // Check if adding more would exceed available stock
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > product.stockQuantity) {
          toast({
            title: "Stock limit reached",
            description: `Only ${product.stockQuantity} items available`,
            variant: "destructive"
          });
          return currentItems.map(item => 
            item.product.id === product.id 
              ? { ...item, quantity: product.stockQuantity } 
              : item
          );
        }
        
        return currentItems.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      
      toast({
        title: "Added to cart",
        description: `${quantity} × ${product.name}`,
      });
      return [...currentItems, { product, quantity }];
    });
  }, [toast]);

  const removeFromCart = useCallback((productId: string) => {
    setItems(currentItems => currentItems.filter(item => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setItems(currentItems => {
      const targetItem = currentItems.find(item => item.product.id === productId);
      
      if (targetItem && quantity > targetItem.product.stockQuantity) {
        toast({
          title: "Stock limit reached",
          description: `Only ${targetItem.product.stockQuantity} items available`,
          variant: "destructive"
        });
        
        return currentItems.map(item => 
          item.product.id === productId 
            ? { ...item, quantity: targetItem.product.stockQuantity } 
            : item
        );
      }
      
      if (quantity <= 0) {
        return currentItems.filter(item => item.product.id !== productId);
      }
      
      return currentItems.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      );
    });
  }, [toast]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  // Calculate derived values
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity, 
    0
  );

  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart,
        totalItems,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
