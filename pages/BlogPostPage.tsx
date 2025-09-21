import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import NotFoundPage from './NotFoundPage';
import { ArticleIcon } from '../assets/CategoryIcons';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <NotFoundPage />;
  }

  return (
    <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <header className="mb-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-eskada-green leading-tight mb-4">{post.title}</h1>
                    <p className="text-lg text-gray-500">
                        Posted on {post.date} by <span className="font-semibold">{post.author}</span>
                    </p>
                </header>

                <div className="w-full h-auto max-h-96 bg-gray-100 flex items-center justify-center rounded-xl shadow-lg mb-12 py-12">
                   <ArticleIcon className="w-24 h-24 text-eskada-green" />
                </div>

                <div
                    className="prose prose-lg max-w-none text-gray-800"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                >
                    {/* The content from constants.ts is rendered here */}
                </div>
                
                <div className="mt-12 text-center">
                    <Link to="/blog" className="text-eskada-light-green hover:text-eskada-green font-semibold">
                        &larr; Back to all articles
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BlogPostPage;