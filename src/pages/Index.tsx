
import { useInventory } from '@/contexts/InventoryContext';
import { getDashboardStats } from '@/data/mockData';
import StatsCard from '@/components/dashboard/StatsCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, PackageOpen, ShoppingCart, AlertTriangle } from 'lucide-react';
import { mockOrders } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const { products } = useInventory();
  const stats = getDashboardStats();
  const recentOrders = mockOrders.slice(0, 3);
  const lowStockProducts = products.filter(p => p.stockQuantity < 20).slice(0, 3);

  return (
    <div className="container py-6 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Your inventory at a glance</p>
        </div>
        <Link to="/products">
          <Button>View All Products</Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Total Sales" 
          value={`$${stats.totalSales.toFixed(2)}`}
          icon={<DollarSign className="h-full w-full" />}
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatsCard 
          title="Products" 
          value={stats.totalProducts}
          icon={<PackageOpen className="h-full w-full" />}
        />
        <StatsCard 
          title="Orders" 
          value={stats.totalOrders}
          icon={<ShoppingCart className="h-full w-full" />}
          trend={{ value: 5.2, isPositive: true }}
        />
        <StatsCard 
          title="Low Stock Items" 
          value={stats.lowStockItems}
          icon={<AlertTriangle className="h-full w-full" />}
          description="Items that need attention"
          className={stats.lowStockItems > 0 ? "border-yellow-300" : ""}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest customer purchases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.length === 0 ? (
                <p className="text-muted-foreground text-center py-4">No recent orders</p>
              ) : (
                recentOrders.map(order => (
                  <div key={order.id} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">{order.customer.name}</p>
                      <div className="text-sm text-muted-foreground">
                        {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                        <span className="mx-2">•</span>
                        ${order.total.toFixed(2)}
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                      order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'processing' ? 'bg-purple-100 text-purple-800' :
                      order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {order.status}
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="mt-4">
              <Link to="/orders">
                <Button variant="outline" size="sm" className="w-full">View All Orders</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Low Stock Alerts</CardTitle>
            <CardDescription>Products that need reordering</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockProducts.length === 0 ? (
                <p className="text-muted-foreground text-center py-4">No low stock items</p>
              ) : (
                lowStockProducts.map(product => (
                  <div key={product.id} className="flex items-center border-b pb-4">
                    <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md border">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <p className="font-medium">{product.name}</p>
                      <div className="text-sm text-muted-foreground">
                        SKU: {product.sku}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        product.stockQuantity === 0 ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {product.stockQuantity} left
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="mt-4">
              <Link to="/products">
                <Button variant="outline" size="sm" className="w-full">Manage Inventory</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
