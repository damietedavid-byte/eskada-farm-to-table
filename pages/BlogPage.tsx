import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ArticleIcon } from '../assets/CategoryIcons';

const BlogPage: React.FC = () => {
    
  useEffect(() => {
    document.title = "Blog | Nigeria Agriculture Insights | Eskada Farms";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read the Eskada Farms blog for insights on Nigerian agriculture, sustainable farming, agribusiness tips, and stories from our farm in Port Harcourt.');
    }
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-eskada-green">Eskada Insights</h1>
        <p className="text-lg text-gray-600 mt-2">Farm-to-market stories and agribusiness articles.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {BLOG_POSTS.map(post => (
          <article key={post.id} className="flex flex-col md:flex-row items-center gap-8">
            <Link to={`/blog/${post.slug}`} className="md:w-1/3 w-full flex-shrink-0">
              <div className="w-full h-48 bg-gray-100 rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <ArticleIcon className="w-16 h-16 text-eskada-green" />
              </div>
            </Link>
            <div className="md:w-2/3 w-full">
              <p className="text-sm text-gray-500">{post.date} &bull; by {post.author}</p>
              <h2 className="text-2xl font-semibold text-eskada-green mt-1 mb-3 hover:text-eskada-light-green">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="font-bold text-eskada-light-green hover:text-eskada-green transition-colors">
                Read Full Article &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;