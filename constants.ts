import { Product, Category, BlogPost, GalleryImage } from './types';

export const CATEGORIES: Category[] = [
  { id: 'cat1', name: 'Fish Products', slug: 'fish' },
  { id: 'cat2', name: 'Palm Products', slug: 'palm' },
  { id: 'cat3', name: 'Fruits', slug: 'fruits' },
  { id: 'cat4', name: 'Vegetables', slug: 'vegetables' },
  { id: 'cat5', name: 'Export Products', slug: 'export' },
];

export const PRODUCTS: Product[] = [
  // Fish
  { id: 'prod1', name: 'Live Catfish (per kg)', slug: 'live-catfish', category: 'fish', price: 3500, description: 'Fresh, live catfish directly from our sustainable farm ponds in Port Harcourt.', imageUrl: 'https://i.ibb.co/mH1m5XW/image-2.jpg' },
  { id: 'prod2', name: 'Dry/processed Catfish (per kg)', slug: 'processed-catfish', category: 'fish', price: 7500, description: 'Expertly smoked and dried catfish, ready to elevate your soups and stews.', imageUrl: 'https://i.ibb.co/W2zM45y/image-20.jpg' },
  
  // Palm Products
  { id: 'prod3', name: 'Palm Oil (1 Litre)', slug: 'palm-oil', category: 'palm', price: 2300, description: 'Pure, unadulterated red palm oil, rich in vitamins and authentic flavor.', imageUrl: 'https://i.ibb.co/VMyXpgr/image-3.jpg' },
  { id: 'prod4', name: 'Processed Palm Kernel (custard bucket)', slug: 'processed-palm-kernel', category: 'palm', price: 5800, description: 'High-quality processed palm kernels for oil extraction or traditional uses.', imageUrl: 'https://i.ibb.co/z5p5823/image-4.jpg' },
  { id: 'prod5', name: 'Palm Kernel Oil (Black, 1 Litre)', slug: 'palm-kernel-oil-black', category: 'palm', price: 5500, description: 'Traditional black palm kernel oil, perfect for cooking and skincare.', imageUrl: 'https://i.ibb.co/M7Q28Wk/image-17.jpg' },
  { id: 'prod19', name: 'Palm Kernel Oil (Yellow, 1 Litre)', slug: 'palm-kernel-oil-yellow', category: 'palm', price: 9509, description: 'Cold-pressed yellow palm kernel oil, ideal for various culinary and cosmetic applications.', imageUrl: 'https://i.ibb.co/M7Q28Wk/image-17.jpg' },

  // Fruits
  { id: 'prod7', name: 'Papaya (Large)', slug: 'papaya-large', category: 'fruits', price: 1000, description: 'Delicious and nutritious large pawpaw, grown with care on our farm.', imageUrl: 'https://i.ibb.co/dKq2ZPg/image-16.jpg' },
  { id: 'prod20', name: 'Papaya (Medium)', slug: 'papaya-medium', category: 'fruits', price: 500, description: 'Sweet and healthy medium-sized pawpaw, perfect for a refreshing snack.', imageUrl: 'https://i.ibb.co/dKq2ZPg/image-16.jpg' },

  // Vegetables
  { id: 'prod9', name: 'Onions (custard bucket)', slug: 'onions-bucket', category: 'vegetables', price: 3500, description: 'A custard bucket full of fresh, pungent onions, a staple for any Nigerian kitchen.', imageUrl: 'https://i.ibb.co/zJ3Jt2h/image-12.jpg' },
  { id: 'prod11', name: 'Okra (custard bucket)', slug: 'okra-bucket', category: 'vegetables', price: 4000, description: 'A custard bucket of freshly picked okra for that perfect draw soup.', imageUrl: 'https://i.ibb.co/dGt0sYx/image-13.jpg' },
  { id: 'prod12', name: 'Pepper (custard bucket)', slug: 'pepper-bucket', category: 'vegetables', price: 4500, description: 'A custard bucket of vibrant, fresh peppers to spice up your meals.', imageUrl: 'https://i.ibb.co/8D1Jk6W/image-10.jpg' },
  { id: 'prod15', name: 'Bitter Leaf (Fresh/Washed, custard bucket)', slug: 'bitter-leaf-fresh-bucket', category: 'vegetables', price: 4500, description: 'A custard bucket of fresh bitter leaf, washed and ready for cooking.', imageUrl: 'https://i.ibb.co/s5D6x8y/image-21.jpg' },
  { id: 'prod21', name: 'Bitter Leaf (Dried, custard bucket)', slug: 'bitter-leaf-dried-bucket', category: 'vegetables', price: 7500, description: 'A custard bucket of dried bitter leaf, preserving its unique flavor for your traditional dishes.', imageUrl: 'https://i.ibb.co/s5D6x8y/image-21.jpg' },
  { id: 'prod22', name: 'Sweet Potatoes (Red/White, custard bucket)', slug: 'sweet-potatoes-bucket', category: 'vegetables', price: 3000, description: 'A custard bucket of versatile and nutritious sweet potatoes, available in red or white varieties.', imageUrl: 'https://i.ibb.co/C0bVw9s/image.png' },

  // Export
  { id: 'prod17', name: 'Bulk Processed Catfish (Export Grade)', slug: 'export-catfish', category: 'export', price: 500000, description: 'Premium, processed catfish packaged for international export. Contact us for bulk pricing and logistics.', imageUrl: 'https://i.ibb.co/W2zM45y/image-20.jpg' },
  { id: 'prod18', name: 'Bulk Palm Oil (Export Grade)', slug: 'export-palm-oil', category: 'export', price: 250000, description: 'Our finest pure palm oil, filtered and packaged to meet global standards for export. Contact us for bulk orders.', imageUrl: 'https://i.ibb.co/VMyXpgr/image-3.jpg' },
];

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 'blog1',
        slug: 'the-art-of-catfish-farming',
        title: 'The Art and Science of Sustainable Catfish Farming',
        author: 'Adekunle Eskada',
        date: 'October 26, 2023',
        excerpt: 'Discover the secrets behind raising healthy, delicious catfish in a way that respects the environment and ensures top quality...',
        content: '<p>Raising catfish is a blend of tradition and modern aquaculture. At Eskada, we focus on clean water, balanced nutrition, and stress-free environments to cultivate fish that are not only large but also incredibly flavorful. Our methods ensure sustainability, protecting the local ecosystem in Port Harcourt while producing a product we are proud of.</p>',
    },
    {
        id: 'blog2',
        slug: 'palm-oil-nigerias-red-gold',
        title: "Palm Oil: Nigeria's Red Gold",
        author: 'Chiamaka Nwosu',
        date: 'October 15, 2023',
        excerpt: 'From our farms to your kitchen, explore the journey of palm oil, its incredible benefits, and its cultural significance in Nigeria.',
        content: '<p>Palm oil is more than an ingredient; it\'s a cornerstone of Nigerian cuisine and culture. We harvest our palm fruits at peak ripeness, ensuring the oil we press is rich in color, flavor, and nutrients. This "red gold" is a testament to the natural bounty of our land and the hard work of our farmers.</p>',
    },
    {
        id: 'blog3',
        slug: 'agribusiness-consulting-tips',
        title: '5 Key Strategies for Agribusiness Success in Nigeria',
        author: 'Adekunle Eskada',
        date: 'September 30, 2023',
        excerpt: 'Leveraging over 20 years of experience, we share crucial insights for navigating the challenges and opportunities in the agricultural sector.',
        content: '<p>Success in agribusiness requires more than just good soil. It demands market insight, logistical expertise, and a deep understanding of the local context. Our consultation services are built on decades of experience, helping entrepreneurs navigate these complexities to build thriving, sustainable businesses.</p>',
    }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: 'https://i.ibb.co/Lp2p68B/image-1.jpg', title: 'A Harvest of Abundance', text: "A stunning display of our farm's diversity, from fresh fish and vibrant vegetables to sweet fruits and rich palm oil." },
  { src: 'https://i.ibb.co/mH1m5XW/image-2.jpg', title: 'Our Famous Catfish', text: 'Freshly harvested catfish, a testament to our clean, sustainable aquaculture practices.' },
  { src: 'https://i.ibb.co/VMyXpgr/image-3.jpg', title: 'Liquid Gold: Palm Oil', text: 'Pure, unadulterated red palm oil, bottled with care against the backdrop of our sprawling palm plantations.' },
  { src: 'https://i.ibb.co/z5p5823/image-4.jpg', title: 'The Source of Richness', text: 'A basket brimming with ripe palm fruits, handpicked at the peak of perfection.' },
  { src: 'https://i.ibb.co/Fk7XW3Z/image-5.jpg', title: 'Nurturing the Ponds', text: 'Our dedicated team ensures every fish is well-fed and healthy, the secret to their superior taste.' },
  { src: 'https://i.ibb.co/wJv8W5d/image-6.jpg', title: 'Tropical Delights', text: 'Juicy pineapples, sweet papayas, and fragrant guavas, all grown under the Nigerian sun.' },
  { src: 'https://i.ibb.co/8YxJ7Z7/image-7.jpg', title: 'The Heart of Egusi Soup', text: 'High-quality melon seeds, ready to be transformed into a beloved Nigerian delicacy.' },
  { src: 'https://i.ibb.co/rpxYtLp/image-8.jpg', title: 'Crisp and Sweet Carrots', text: 'Lined up and fresh from the earth, our carrots are a vibrant addition to any meal.' },
  { src: 'https://i.ibb.co/0V8gS3G/image-9.jpg', title: 'A Crown of Sweetness', text: 'A beautiful harvest of pineapples, showcasing the sweet rewards of our fertile fields.' },
  { src: 'https://i.ibb.co/8D1Jk6W/image-10.jpg', title: 'A Spectrum of Spice', text: 'A colorful medley of peppers, bringing the perfect amount of heat and flavor to your kitchen.' },
  { src: 'https://i.ibb.co/M9K3f84/image-11.jpg', title: 'Fresh Greens', text: 'Tender, dewy leaves, harvested in the cool morning light to ensure maximum freshness.' },
  { src: 'https://i.ibb.co/zJ3Jt2h/image-12.jpg', title: 'The Market Stall', text: 'Our fresh onions and other produce are a popular choice at the local market.' },
  { src: 'https://i.ibb.co/dGt0sYx/image-13.jpg', title: 'Perfect Okra', text: 'A basket of freshly picked okra, essential for creating the perfect draw soup.' },
  { src: 'https://i.ibb.co/r3f0pGm/image-14.jpg', title: 'Palm Fruit Harvest', text: 'From the tree to the bottle, the journey of our palm products begins with a bountiful harvest.' },
  { src: 'https://i.ibb.co/hL4zWcv/image-15.jpg', title: 'Refreshing Guavas', text: 'Sweet and aromatic guavas, a healthy and delicious treat enjoyed by all.' },
  { src: 'https://i.ibb.co/dKq2ZPg/image-16.jpg', title: 'Sun-Ripened Pawpaw', text: 'Bursting with flavor and nutrients, our pawpaws (papayas) are a taste of paradise.' },
  { src: 'https://i.ibb.co/M7Q28Wk/image-17.jpg', title: 'Golden Palm Kernel Oil', text: 'Our pure palm kernel oil, a versatile product for both cooking and traditional remedies, on display at the market.' },
  { src: 'https://i.ibb.co/6Pqj4tX/image-18.jpg', title: 'Plump, Juicy Tomatoes', text: 'The foundation of countless Nigerian stews, our tomatoes are grown for rich flavor and color.' },
  { src: 'https://i.ibb.co/m9X2g2X/image-19.jpg', title: 'From Our Fields to the Market', text: 'A vibrant display of our diverse vegetable harvest, ready for our loyal customers.' },
  { src: 'https://i.ibb.co/W2zM45y/image-20.jpg', title: 'Smoked Fish Perfection', text: 'Expertly smoked fish, adding a deep, savory flavor to soups and stews.' },
  { src: 'https://i.ibb.co/s5D6x8y/image-21.jpg', title: 'Ready for the Pot', text: 'Freshly washed bitter leaf, prepped and ready to bring its unique flavor to your cooking.' }
];