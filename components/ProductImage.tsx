import React from 'react';
import { Product } from '../types';

interface ProductImageProps {
  product: Product;
  className?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ product, className }) => {
  const { name, imageUrl, category } = product;

  const altText = `Fresh ${name} from Eskada Farms - a leading supplier of ${category} products in Nigerian agriculture.`;

  return (
    <div className={`bg-eskada-bg ${className}`}>
        <img
            src={imageUrl}
            alt={altText}
            title={altText}
            className="w-full h-full object-cover"
            loading="lazy"
            width="300"
            height="300"
        />
    </div>
  );
};

export default ProductImage;
