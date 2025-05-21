
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/data/mockData';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const TAX_RATE = 0.08;
const SHIPPING_FEE = 5.99;

const CartSummary = () => {
  const { subtotal, clearCart, items } = useCart();
  const navigate = useNavigate();
  
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + (subtotal > 0 ? SHIPPING_FEE : 0);

  const handleCheckout = () => {
    toast.success('Order placed successfully!');
    clearCart();
    navigate('/');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Tax (8%)</span>
          <span>{formatCurrency(tax)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span>{subtotal > 0 ? formatCurrency(SHIPPING_FEE) : 'Free'}</span>
        </div>
        <div className="border-t pt-4 flex justify-between font-medium">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full"
          size="lg"
          disabled={items.length === 0}
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartSummary;
