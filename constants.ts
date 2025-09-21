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
  { id: 'prod1', name: 'Live Catfish (per kg)', slug: 'live-catfish', category: 'fish', price: 4500, description: 'Fresh, live catfish directly from our sustainable farm ponds in Port Harcourt.' },
  { id: 'prod2', name: 'Processed Catfish (500g)', slug: 'processed-catfish', category: 'fish', price: 5500, description: 'Expertly smoked and dried catfish, ready to elevate your soups and stews.' },
  
  // Palm Products
  { id: 'prod3', name: 'Palm Oil (1 Litre)', slug: 'palm-oil', category: 'palm', price: 2500, description: 'Pure, unadulterated red palm oil, rich in vitamins and authentic flavor.' },
  { id: 'prod4', name: 'Palm Kernel (Basket)', slug: 'palm-kernel', category: 'palm', price: 1500, description: 'High-quality palm kernels for oil extraction or traditional uses.' },
  { id: 'prod5', name: 'Palm Kernel Oil (500ml)', slug: 'palm-kernel-oil', category: 'palm', price: 2000, description: 'Cold-pressed palm kernel oil, perfect for cooking and skincare.' },

  // Fruits
  { id: 'prod6', name: 'Pineapple (Large)', slug: 'pineapple', category: 'fruits', price: 1800, description: 'Sweet and juicy pineapples, harvested at peak ripeness.' },
  { id: 'prod7', name: 'Pawpaw (per kg)', slug: 'pawpaw', category: 'fruits', price: 1200, description: 'Delicious and nutritious pawpaw, grown with care on our farm.' },
  { id: 'prod8', name: 'Guavas (Bunch)', slug: 'guavas', category: 'fruits', price: 900, description: 'Aromatic and sweet guavas, packed with Vitamin C.' },

  // Vegetables
  { id: 'prod9', name: 'Onions (Bag)', slug: 'onions', category: 'vegetables', price: 2200, description: 'Fresh, pungent onions, a staple for any Nigerian kitchen.' },
  { id: 'prod10', name: 'Tomatoes (Basket)', slug: 'tomatoes', category: 'vegetables', price: 3500, description: 'Plump, red tomatoes bursting with flavor, perfect for stews and salads.' },
  { id: 'prod11', name: 'Okra (Heap)', slug: 'okra', category: 'vegetables', price: 700, description: 'Freshly picked okra for that perfect draw soup.' },
  { id: 'prod12', name: 'Peppers (Small Basket)', slug: 'peppers', category: 'vegetables', price: 1500, description: 'A vibrant mix of fresh peppers to spice up your meals.' },
  { id: 'prod13', name: 'Carrots (Bunch)', slug: 'carrots', category: 'vegetables', price: 1000, description: 'Crisp and sweet carrots, straight from the farm.' },
  { id: 'prod14', name: 'Melon / Egusi (Bowl)', slug: 'melon-egusi', category: 'vegetables', price: 2800, description: 'High-quality melon seeds (Egusi) for traditional Nigerian soups.' },
  { id: 'prod15', name: 'Bitter Leaf (Washed)', slug: 'bitter-leaf', category: 'vegetables', price: 900, description: 'Fresh bitter leaf, washed and ready for cooking.' },
  { id: 'prod16', name: 'Ewedu Leaves (Bunch)', slug: 'ewedu', category: 'vegetables', price: 500, description: 'Fresh Jute leaves (Ewedu) for a delicious, slimy soup.' },

  // Export
  { id: 'prod17', name: 'Bulk Processed Catfish (Export Grade)', slug: 'export-catfish', category: 'export', price: 500000, description: 'Premium, processed catfish packaged for international export. Contact us for bulk pricing and logistics.' },
  { id: 'prod18', name: 'Bulk Palm Oil (Export Grade)', slug: 'export-palm-oil', category: 'export', price: 250000, description: 'Our finest pure palm oil, filtered and packaged to meet global standards for export. Contact us for bulk orders.' },
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