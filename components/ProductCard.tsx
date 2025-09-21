import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/helpers';
import ProductBranding from './ProductBranding';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col group transition-transform duration-300 hover:-translate-y-1">
      <Link to={`/product/${product.slug}`} className="block">
        <ProductBranding
          category={product.category}
          productName={product.name}
          className="w-full h-48"
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate group-hover:text-eskada-light-green">
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="text-eskada-brown font-bold text-xl mb-3">
          {formatCurrency(product.price)}
        </p>
        <div className="mt-auto">
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-eskada-green text-white py-2 px-4 rounded-md hover:bg-eskada-light-green transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-eskada-light-green focus:ring-opacity-50"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
