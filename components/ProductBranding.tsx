import React from 'react';

interface ProductBrandingProps {
  category: string;
  productName: string;
  className?: string;
  size?: 'sm' | 'md';
}

const BrandingContent = ({ title, subtitle, size }: { title: string, subtitle: string, size: 'sm' | 'md' }) => (
    <div className={`text-center flex flex-col justify-center h-full ${size === 'sm' ? 'p-1' : 'p-4'}`}>
        <p className={`font-light text-eskada-light-green tracking-wide uppercase ${size === 'sm' ? 'text-[0.5rem] leading-tight' : 'text-sm'}`}>{subtitle}</p>
        <h3 className={`font-bold text-eskada-gold tracking-wider ${size === 'sm' ? 'text-xl my-0.5' : 'text-3xl my-1'}`}>ESKADA</h3>
        <p className={`font-semibold text-eskada-green uppercase ${size === 'sm' ? 'text-[0.6rem] leading-tight break-words' : 'text-xl'}`}>{title}</p>
    </div>
);

const ProductBranding: React.FC<ProductBrandingProps> = ({ category, productName, className, size = 'md' }) => {
  const getBranding = () => {
    // Use the specific product name, removing unit specifiers like (per kg) for a cleaner look.
    const formattedProductName = productName.split('(')[0].trim();

    switch (category) {
      case 'fish':
        return <BrandingContent size={size} subtitle="Premium Quality" title={formattedProductName} />;
      case 'palm':
        return <BrandingContent size={size} subtitle="Pure & Unadulterated" title={formattedProductName} />;
      case 'fruits':
        return <BrandingContent size={size} subtitle="Harvested Fresh" title={formattedProductName} />;
      case 'vegetables':
        return <BrandingContent size={size} subtitle="Farm to Table" title={formattedProductName} />;
      case 'export':
        return <BrandingContent size={size} subtitle="Global Standard" title={formattedProductName} />;
      default:
        return <BrandingContent size={size} subtitle="High Quality" title={formattedProductName} />;
    }
  };

  return (
    <div
      title={productName}
      className={`flex items-center justify-center bg-eskada-bg border border-gray-200 ${className}`}
    >
      {getBranding()}
    </div>
  );
};

export default ProductBranding;