import React, { useState } from 'react';
import { GalleryImage } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from '../assets/icons';

interface SlideshowProps {
  images: GalleryImage[];
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  }

  if (!images || images.length === 0) {
    return <div>No images to display.</div>;
  }

  return (
    <div className="relative">
      <div className="relative aspect-video w-full overflow-hidden">
        {images.map((image, index) => (
            <img 
                key={image.src}
                src={image.src}
                alt={image.title}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden={index !== currentIndex}
            />
        ))}
        <button onClick={goToPrevious} className="absolute top-1/2 left-3 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 transition-opacity" aria-label="Previous image">
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button onClick={goToNext} className="absolute top-1/2 right-3 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 transition-opacity" aria-label="Next image">
          <ChevronRightIcon className="h-6 w-6" />
        </button>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, slideIndex) => (
                <button 
                    key={slideIndex} 
                    onClick={() => goToSlide(slideIndex)}
                    className={`h-3 w-3 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-white' : 'bg-white bg-opacity-50 hover:bg-opacity-75'}`}
                    aria-label={`Go to slide ${slideIndex + 1}`}
                />
            ))}
        </div>
      </div>
      <div className="p-6 bg-eskada-bg text-center">
        <h3 className="text-xl font-bold text-eskada-green mb-2">{images[currentIndex].title}</h3>
        <p className="text-gray-700 leading-relaxed">{images[currentIndex].text}</p>
      </div>
    </div>
  );
};

export default Slideshow;