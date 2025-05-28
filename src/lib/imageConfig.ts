// Check if local images exist, fallback to Unsplash
const getImageSrc = (localPath: string, unsplashQuery: string, dimensions: string) => {
  // In production, you might want to check if the local image exists
  // For now, we'll use a simple check or always use local if available
  return localPath
}

export const imageConfig = {
  hero: {
    flower1: {
      src: '/images/flower1.png',
      alt: 'Pink decorative flower',
      width: 300,
      height: 300
    },
    flower2: {
      src: '/images/flower2.png',
      alt: 'Red rose flower',
      width: 250,
      height: 250
    },
    flower3: {
      src: '/images/flower3.png',
      alt: 'White flower bloom',
      width: 200,
      height: 200
    }
  },
  products: [
    {
      id: 1,
      name: 'Romantic Blush',
      price: 2999,
      image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Updated Unsplash link
      description: 'A delicate arrangement of soft pink roses and peonies'
    },
    {
      id: 2,
      name: 'Vibrant Sunrise',
      price: 2599,
      image: 'https://plus.unsplash.com/premium_photo-1681400781198-467673d27dc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfDJ8MHx8fDA%3D', // Updated Unsplash link
      description: 'Bold orange and red flowers with accents of yellow'
    },
    {
      id: 3,
      name: 'Serene Dreams',
      price: 3299,
      image: 'https://plus.unsplash.com/premium_photo-1683121483139-9cc684db4cad?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      description: 'Calming white and purple blooms with eucalyptus'
    },
    {
      id: 4,
      name: 'Exotic Paradise',
      price: 4299,
      image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfDJ8MHx8fDA%3D', // Updated Unsplash link
      description: 'Tropical flowers in vibrant hues of pink and orange'
    }
  ],
  about: {
    workshop: {
      src: 'https://images.unsplash.com/photo-1664170462134-fa7451aaa96f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Updated Unsplash link
      alt: 'Floral arrangement workshop'
    }
  }
}

// Helper function to update image paths after upload
export const updateImageConfig = (uploadedImages: string[]) => {
  // This function can be called to update paths when images are uploaded
  // You can extend this to dynamically update the configuration
}
