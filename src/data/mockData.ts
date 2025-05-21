
import { Order, Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Earbuds',
    description: 'High-quality wireless earbuds with noise cancellation',
    price: 99.99,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80',
    stockQuantity: 45,
    sku: 'WE-001',
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2023-05-20'),
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with heart rate monitoring',
    price: 199.99,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    stockQuantity: 28,
    sku: 'SW-002',
    createdAt: new Date('2023-02-10'),
    updatedAt: new Date('2023-06-05'),
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with 20-hour battery life',
    price: 79.99,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80',
    stockQuantity: 62,
    sku: 'BS-003',
    createdAt: new Date('2023-01-25'),
    updatedAt: new Date('2023-05-15'),
  },
  {
    id: '4',
    name: 'Laptop Backpack',
    description: 'Durable laptop backpack with anti-theft features',
    price: 59.99,
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1585916420730-d7f95e942d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    stockQuantity: 88,
    sku: 'LB-004',
    createdAt: new Date('2023-03-05'),
    updatedAt: new Date('2023-06-20'),
  },
  {
    id: '5',
    name: 'Desk Lamp',
    description: 'Adjustable desk lamp with multiple brightness settings',
    price: 45.99,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1534277383975-56f98d73d196?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    stockQuantity: 15,
    sku: 'DL-005',
    createdAt: new Date('2023-04-12'),
    updatedAt: new Date('2023-07-01'),
  },
  {
    id: '6',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with thermal carafe',
    price: 89.99,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1595246340888-a243c73fc7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    stockQuantity: 32,
    sku: 'CM-006',
    createdAt: new Date('2023-02-28'),
    updatedAt: new Date('2023-06-15'),
  },
  {
    id: '7',
    name: 'Yoga Mat',
    description: 'Non-slip yoga mat with carrying strap',
    price: 29.99,
    category: 'Fitness',
    imageUrl: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80',
    stockQuantity: 54,
    sku: 'YM-007',
    createdAt: new Date('2023-03-20'),
    updatedAt: new Date('2023-06-25'),
  },
  {
    id: '8',
    name: 'Water Bottle',
    description: 'Insulated water bottle, keeps drinks cold for 24 hours',
    price: 24.99,
    category: 'Fitness',
    imageUrl: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80',
    stockQuantity: 0,
    sku: 'WB-008',
    createdAt: new Date('2023-04-05'),
    updatedAt: new Date('2023-07-10'),
  },
];

export const mockOrders: Order[] = [
  {
    id: '1',
    items: [
      { product: mockProducts[0], quantity: 2 },
      { product: mockProducts[3], quantity: 1 },
    ],
    customer: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      address: '123 Main St, Anytown, CA 91234',
    },
    status: 'delivered',
    total: 259.97,
    createdAt: new Date('2023-05-15'),
    updatedAt: new Date('2023-05-18'),
  },
  {
    id: '2',
    items: [
      { product: mockProducts[1], quantity: 1 },
    ],
    customer: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      address: '456 Oak Ave, Somewhere, NY 10001',
    },
    status: 'shipped',
    total: 199.99,
    createdAt: new Date('2023-05-20'),
    updatedAt: new Date('2023-05-22'),
  },
  {
    id: '3',
    items: [
      { product: mockProducts[2], quantity: 1 },
      { product: mockProducts[5], quantity: 1 },
    ],
    customer: {
      name: 'Robert Johnson',
      email: 'robert.j@example.com',
      address: '789 Pine Rd, Elsewhere, TX 75001',
    },
    status: 'processing',
    total: 169.98,
    createdAt: new Date('2023-05-25'),
    updatedAt: new Date('2023-05-26'),
  },
  {
    id: '4',
    items: [
      { product: mockProducts[4], quantity: 3 },
    ],
    customer: {
      name: 'Emily Wilson',
      email: 'emily.w@example.com',
      address: '101 Cedar Ln, Nowhere, WA 98001',
    },
    status: 'pending',
    total: 137.97,
    createdAt: new Date('2023-06-01'),
    updatedAt: new Date('2023-06-01'),
  },
];

export const getStockStatus = (quantity: number): 'In Stock' | 'Low Stock' | 'Out of Stock' => {
  if (quantity === 0) return 'Out of Stock';
  if (quantity < 20) return 'Low Stock';
  return 'In Stock';
};

export const getStatusColor = (status: Order['status']): string => {
  const colors: Record<Order['status'], string> = {
    'pending': 'bg-yellow-100 text-yellow-800',
    'processing': 'bg-blue-100 text-blue-800',
    'shipped': 'bg-purple-100 text-purple-800',
    'delivered': 'bg-green-100 text-green-800',
    'cancelled': 'bg-red-100 text-red-800',
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const getDashboardStats = () => {
  return {
    totalSales: 767.91,
    totalOrders: 4,
    totalProducts: mockProducts.length,
    lowStockItems: mockProducts.filter(p => p.stockQuantity < 20).length,
  };
};
