
import ProductList from '@/components/products/ProductList';

const Products = () => {
  return (
    <div className="container py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Products</h1>
        <p className="text-muted-foreground">Manage and view your inventory</p>
      </div>
      <ProductList />
    </div>
  );
};

export default Products;
