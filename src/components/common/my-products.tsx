import ProductCard from './linkedin-card';

const products = [
  {
    name: 'Choiee',
    date: 'October 2024',
    url: 'https://choiee.com',
    logo: './choiee_logo.png',
    images: [
      './choiee_3.jpeg',
      './choiee_1.jpeg',
      './choiee_2.jpeg',
      './choiee_4.jpeg',
    ],
    description: (
      <>
        <p className='font-medium text-white/80'>
          🌟 Exciting Times at Choiee! 🌟
        </p>
        <p className='mb-2 mt-1 text-sm text-white/70'>
          We are thrilled to introduce our product to the world and connect with
          the incredible talents in the startup ecosystem during UpYouth - Tech
          Startup Ecosystem&apos;s Demo Day.
        </p>
      </>
    ),
    readMoreLink:
      'https://www.linkedin.com/posts/choiee_choiee-startup-demoday-activity-7239206586202644480-16-6',
  },
  {
    name: 'Easplit',
    date: 'January 2025',
    url: 'https://easplit.com',
    logo: './easplit_logo.png',
    images: ['./easplit_1.png', './easplit_2.png'],
    description: (
      <>
        <p className='font-medium text-white/80'>
          Easy split is available now 🚀!
        </p>
        <p className='mb-2 mt-1 text-sm text-white/70'>
          Easplit is a simple yet powerful expense-sharing app that makes
          splitting bills with friends and family effortless. Track shared
          expenses, manage group budgets, and settle up with just a few taps.
          Say goodbye to awkward money conversations and hello to stress-free
          shared finances.
        </p>
      </>
    ),
  },
  {
    name: 'EasyGacha',
    date: 'January 2025',
    url: 'https://easygacha.com',
    logo: './easygacha_logo.png',
    images: ['./easygacha_1.png', './easygacha_2.png'],
    description: (
      <>
        <p className='font-medium text-white/80'>
          Easy Gacha is available now 🚀!
        </p>
        <p className='mb-2 mt-1 text-sm text-white/70'>
          EasyGacha is an easy and fast way to enjoy gacha games. Dive into a
          world of excitement and collect your favorite characters with ease.
          Join the fun and start your gacha journey today!
        </p>
      </>
    ),
  },
];

export default function MyProduct() {
  return (
    <div className='space-y-11'>
      {products.map((product) => {
        return <ProductCard {...product} key={product.name} />;
      })}
    </div>
  );
}
