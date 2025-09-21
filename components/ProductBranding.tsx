import React from 'react';

interface ProductBrandingProps {
  category: string;
  productName: string;
  className?: string;
}

const BrandingContent = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="text-center p-4">
        <p className="text-sm font-light text-eskada-light-green tracking-widest uppercase">{subtitle}</p>
        <h3 className="text-3xl font-bold text-eskada-gold tracking-wider my-1">ESKADA</h3>
        <p className="text-xl font-semibold text-eskada-green uppercase">{title}</p>
    </div>
);

const ProductBranding: React.FC<ProductBrandingProps> = ({ category, productName, className }) => {
  const getBranding = () => {
    // Use the specific product name, removing unit specifiers like (per kg) for a cleaner look.
    const formattedProductName = productName.split('(')[0].trim();

    switch (category) {
      case 'fish':
        return <BrandingContent subtitle="Premium Quality" title={formattedProductName} />;
      case 'palm':
        return <BrandingContent subtitle="Pure & Unadulterated" title={formattedProductName} />;
      case 'fruits':
        return <BrandingContent subtitle="Harvested Fresh" title={formattedProductName} />;
      case 'vegetables':
        return <BrandingContent subtitle="Farm to Table" title={formattedProductName} />;
      case 'export':
        return <BrandingContent subtitle="Global Standard" title={formattedProductName} />;
      default:
        return <BrandingContent subtitle="High Quality" title={formattedProductName} />;
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