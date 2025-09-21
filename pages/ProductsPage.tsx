
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../constants';

const ProductsPage: React.FC = () => {
  const { category: categorySlug } = useParams<{ category?: string }>();

  const currentCategory = categorySlug
    ? CATEGORIES.find(c => c.slug === categorySlug)
    : null;

  const filteredProducts = categorySlug
    ? PRODUCTS.filter(p => p.category === categorySlug)
    : PRODUCTS;

  const title = currentCategory ? currentCategory.name : 'All Products';

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-eskada-green mb-10">{title}</h1>
      
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <p className="text-xl text-gray-600">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
