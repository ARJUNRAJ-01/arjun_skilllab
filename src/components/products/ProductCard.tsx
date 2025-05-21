
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { formatCurrency, getStockStatus } from '@/data/mockData';
import { PlusCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const stockStatus = getStockStatus(product.stockQuantity);

  const getStockStatusClasses = () => {
    if (stockStatus === 'Out of Stock') return 'bg-red-100 text-red-800';
    if (stockStatus === 'Low Stock') return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  };

  return (
    <Card className="product-card">
      <div className="aspect-square overflow-hidden rounded-t-lg">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-sm font-medium text-muted-foreground">
            {product.category}
          </div>
          <div className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStockStatusClasses()}`}>
            {stockStatus}
          </div>
        </div>
        <h3 className="font-medium mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 h-10">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="font-bold">{formatCurrency(product.price)}</div>
        <Button 
          size="sm" 
          onClick={() => addToCart(product)}
          disabled={product.stockQuantity === 0}
        >
          <PlusCircle className="mr-1 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
