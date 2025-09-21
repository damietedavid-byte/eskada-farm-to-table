import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, BLOG_POSTS, CATEGORIES } from '../constants';
import { FarmIcon } from '../assets/CategoryIcons';

const Hero = () => (
    <div
        className="relative bg-cover bg-center h-[60vh] text-white flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/2518893/pexels-photo-2518893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
    >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">From Our Farm to Your Table</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Experience the taste of freshness. We deliver premium quality farm products straight from Port Harcourt.
            </p>
            <Link to="/products" className="bg-eskada-gold text-eskada-green font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-colors duration-300">
                Shop Now
            </Link>
        </div>
    </div>
);

const CategoryShowcase = () => (
    <div className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-eskada-green mb-10">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                {CATEGORIES.map(category => (
                    <Link to={`/products/${category.slug}`} key={category.id} className="block group">
                        <div className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col justify-center items-center bg-eskada-bg">
                            <h3 className="text-xl font-semibold text-eskada-green group-hover:text-eskada-light-green">{category.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
);

const FeaturedProducts = () => (
    <div className="py-16">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-eskada-green mb-10">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {PRODUCTS.slice(0, 4).map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    </div>
);

const ExportShowcase = () => (
    <div className="py-20 bg-eskada-green text-white">
        <div className="container mx-auto px-6 text-center">
            <FarmIcon className="w-16 h-16 mx-auto mb-4 text-eskada-gold"/>
            <h2 className="text-4xl font-bold mb-4">Global Reach: Exporting Nigeria's Finest</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
                We provide premium, export-grade agricultural products packaged to meet international standards. From processed catfish to pure palm oil, we are your trusted partner for bulk orders and global shipping.
            </p>
            <Link to="/products/export" className="bg-eskada-gold text-eskada-green font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-colors duration-300">
                Explore Export Products
            </Link>
        </div>
    </div>
);

const CallToAction = () => (
    <div className="bg-eskada-light-green text-white py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Shop Fresh, Shop Eskada.</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join hundreds of satisfied customers who trust Eskada for their daily fresh produce and business needs.
            </p>
            <Link to="/products" className="bg-white text-eskada-light-green font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300">
                Explore Our Range
            </Link>
        </div>
    </div>
);

const BlogPreview = () => (
    <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-eskada-green mb-10">Eskada Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BLOG_POSTS.slice(0, 3).map(post => (
                    <div key={post.id} className="border rounded-lg shadow-lg overflow-hidden flex flex-col">
                        <div className="w-full h-48 bg-eskada-bg flex items-center justify-center">
                           {/* Icon removed for a cleaner look */}
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold mb-2 text-eskada-green">{post.title}</h3>
                            <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                            <Link to={`/blog/${post.slug}`} className="font-semibold text-eskada-light-green hover:text-eskada-green mt-auto">
                                Read More &rarr;
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <CategoryShowcase />
      <FeaturedProducts />
      <ExportShowcase />
      <CallToAction />
      <BlogPreview />
    </div>
  );
};

export default HomePage;