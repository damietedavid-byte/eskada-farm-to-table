import React, { useEffect } from 'react';

const GalleryPage: React.FC = () => {
    
  useEffect(() => {
    document.title = "Gallery | Eskada Farms | Nigerian Agriculture in Action";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore the Eskada Farms gallery. See photos of our fresh catfish, palm oil production, vegetable harvests, and the heart of our Nigerian farm operations.');
    }
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-eskada-green">Our Farm Gallery</h1>
        <p className="text-lg text-gray-600 mt-2">A glimpse into life at Eskada Farms.</p>
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <iframe
          className="w-full rounded-lg shadow-2xl"
          style={{ height: '80vh', border: 'none' }}
          src="https://imgur.com/a/ZjV3hS8/embed?pub=true"
          title="Eskada Farms Gallery from Imgur"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default GalleryPage;