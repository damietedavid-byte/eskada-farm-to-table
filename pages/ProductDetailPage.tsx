import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import NotFoundPage from './NotFoundPage';
import { formatCurrency } from '../utils/helpers';
import { useCart } from '../context/CartContext';
import ProductImage from '../components/ProductImage';

const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.slug === slug);

  useEffect(() => {
    if (product) {
      document.title = `Buy ${product.name} | Eskada Farms | Nigerian Agriculture`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${product.description} Order fresh ${product.name} online from Eskada Farms, your trusted Nigerian farmer in Port Harcourt.`);
      }
    }
  }, [product]);

  if (!product) {
    return <NotFoundPage />;
  }

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.imageUrl,
    "sku": product.id,
    "brand": {
        "@type": "Brand",
        "name": "Eskada"
    },
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "priceCurrency": "NGN",
      "price": product.price,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Eskada Farms"
      }
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <ProductImage
            product={product}
            className="w-full h-auto min-h-[300px] max-h-[500px] rounded-lg shadow-lg"
          />
        </div>
        <div>
          <Link to={`/products/${product.category}`} className="text-eskada-light-green hover:underline capitalize">{product.category}</Link>
          <h1 className="text-4xl font-bold text-eskada-green my-2">{product.name}</h1>
          <p className="text-3xl font-bold text-eskada-brown mb-6">{formatCurrency(product.price)}</p>
          <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="w-full max-w-sm bg-eskada-green text-white py-3 px-6 rounded-lg text-lg hover:bg-eskada-light-green transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-eskada-light-green focus:ring-opacity-50"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;