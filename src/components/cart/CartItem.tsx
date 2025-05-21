
import { useCart } from '@/contexts/CartContext';
import { CartItem as CartItemType } from '@/types';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { formatCurrency } from '@/data/mockData';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center">
        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="ml-4 flex flex-col">
          <h3 className="text-sm font-medium">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{formatCurrency(product.price)}</p>
          <p className="text-xs text-muted-foreground mt-1">SKU: {product.sku}</p>
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center border rounded-md">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none"
            onClick={() => updateQuantity(product.id, quantity - 1)}
            disabled={quantity <= 1}
          >
            <Minus className="h-3 w-3" />
            <span className="sr-only">Decrease quantity</span>
          </Button>
          <span className="w-8 text-center text-sm">{quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none"
            onClick={() => updateQuantity(product.id, quantity + 1)}
            disabled={quantity >= product.stockQuantity}
          >
            <Plus className="h-3 w-3" />
            <span className="sr-only">Increase quantity</span>
          </Button>
        </div>
        <p className="ml-4 text-sm font-medium">
          {formatCurrency(product.price * quantity)}
        </p>
        <Button
          variant="ghost"
          size="icon"
          className="ml-2"
          onClick={() => removeFromCart(product.id)}
        >
          <Trash2 className="h-4 w-4 text-muted-foreground" />
          <span className="sr-only">Remove</span>
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
