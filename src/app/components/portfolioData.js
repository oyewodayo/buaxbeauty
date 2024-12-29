// portfolioData.js

export const services = [
    'Wedding and Pre Wedding',
    'Male Grooming',
    'Editorial',
    'Birthday Shoot',
    'Music/Commercial shoot',
    'Jewellery'
  ];
  
  export const imageData = {
    'Wedding and Pre Wedding': Array.from({ length: 6 }, (_, i) => ({
      src: `/wedding-${i + 1}.png`,
      alt: `Wedding ${i + 1}`,
      title: `Wedding Photo ${i + 1}`,
      category: 'Wedding and Pre Wedding'
    })),
    'Male Grooming': Array.from({ length: 6 }, (_, i) => ({
      src: `/grooming-${i + 1}.png`,
      alt: `Grooming ${i + 1}`,
      title: `Grooming Photo ${i + 1}`,
      category: 'Male Grooming'
    })),
    'Editorial': Array.from({ length: 6 }, (_, i) => ({
      src: `/editorial-${i + 1}.png`,
      alt: `Editorial ${i + 1}`,
      title: `Editorial Photo ${i + 1}`,
      category: 'Editorial'
    })),
    'Birthday Shoot': Array.from({ length: 6 }, (_, i) => ({
      src: `/birthday-${i + 1}.png`,
      alt: `Birthday ${i + 1}`,
      title: `Birthday Photo ${i + 1}`,
      category: 'Birthday Shoot'
    })),
    'Music/Commercial shoot': Array.from({ length: 6 }, (_, i) => ({
      src: `/commercial-${i + 1}.png`,
      alt: `Commercial ${i + 1}`,
      title: `Commercial Photo ${i + 1}`,
      category: 'Music/Commercial shoot'
    })),
    'Jewellery': Array.from({ length: 6 }, (_, i) => ({
      src: `/jewellery-${i + 1}.png`,
      alt: `Jewellery ${i + 1}`,
      title: `Jewellery Photo ${i + 1}`,
      category: 'Jewellery'
    }))
  };
  
  // Helper functions
  export const getAllImages = () => {
    return Object.values(imageData).flat();
  };
  
  export const getImagesByCategory = (category) => {
    return imageData[category] || [];
  };
  
  export const getRandomImages = (count = 6) => {
    const allImages = getAllImages();
    return allImages.sort(() => Math.random() - 0.5).slice(0, count);
  };