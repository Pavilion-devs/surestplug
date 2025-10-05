import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BestSellers = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const products = [
    {
      title: "Statement Ring",
      price: "₦28,000",
      stock: "In Stock",
      stockColor: "text-green-600",
      description: "Bold, chunky gold signet ring with organic pink crystal cluster. Perfect for those who love to stand out with their jewelry choices.",
      images: ["/1.png", "/5.png"],
      category: "chunky-rings"
    },
    {
      title: "Delicate Gold Band",
      price: "₦15,000",
      stock: "In Stock",
      stockColor: "text-green-600",
      description: "Simple, elegant thin gold band ring. Perfect for everyday wear or layering with other pieces.",
      images: ["/2.png"],
      category: "dainty-rings"
    },
    {
      title: "Elegant Hand Chain",
      price: "₦32,000",
      stock: "In Stock",
      stockColor: "text-green-600",
      description: "Gold hand chain bracelet with heart charm. A modern take on traditional jewelry that adds elegance to any outfit.",
      images: ["/3.png", "/4.png"],
      category: "hand-chains"
    },
    {
      title: "Minimalist Ring Set",
      price: "₦24,000",
      stock: "In Stock",
      stockColor: "text-green-600",
      description: "Set of delicate gold rings for layering. Each ring has a different design but they work beautifully together.",
      images: ["/6.png", "/7.png"],
      category: "dainty-rings"
    },
    {
      title: "Artisan Crafted Ring",
      price: "₦19,000",
      stock: "Limited Stock",
      stockColor: "text-neutral-500",
      description: "Distinctive hammered gold ring with organic texture. Unique craftsmanship that makes each piece one-of-a-kind.",
      images: ["/8.png"],
      category: "chunky-rings"
    },
    {
      title: "Heart Charm Bracelet",
      price: "₦26,000",
      stock: "In Stock",
      stockColor: "text-green-600",
      description: "Figaro chain bracelet with multiple dangling heart charms. Perfect for expressing your romantic side.",
      images: ["/17.png"],
      category: "hand-chains"
    }
  ];

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setModalImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const nextModalImage = () => {
    if (selectedProduct && selectedProduct.images.length > 1) {
      setModalImageIndex((prev) => (prev + 1) % selectedProduct.images.length);
    }
  };

  const prevModalImage = () => {
    if (selectedProduct && selectedProduct.images.length > 1) {
      setModalImageIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length);
    }
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = '';
  };

  // Auto-rotate images for products with multiple images
  React.useEffect(() => {
    const intervals = products.map((product, productIndex) => {
      if (product.images.length > 1) {
        return setInterval(() => {
          setCurrentImageIndex(prev => ({
            ...prev,
            [productIndex]: ((prev[productIndex] || 0) + 1) % product.images.length
          }));
        }, 3000); // Change image every 3 seconds
      }
      return null;
    });

    return () => {
      intervals.forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

  // Close modal with escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeProductModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <section className="sm:px-6 lg:px-8 sm:mt-32 lg:mt-20 max-w-7xl mt-0 mr-auto ml-auto pr-4 pl-4">
        <div className="sm:pt-20 border-neutral-200 border-0 pt-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Best Sellers
            </h2>
            <p className="text-lg text-neutral-600 tracking-tight max-w-2xl mx-auto">
              Our most coveted jewelry pieces that define luxury and continue to sell out worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {products.map((product, index) => {
              const currentImg = currentImageIndex[index] || 0;
              return (
                <div key={index} className="group cursor-pointer" onClick={() => openProductModal(product)}>
                  <div className="overflow-hidden transition-transform group-hover:translate-x-1 group-hover:translate-y-1 bg-white border-black border-8 rounded-[28px]">
                    <div className="aspect-[3/4] bg-neutral-100 overflow-hidden relative">
                      <img 
                        src={product.images[currentImg]} 
                        alt={product.title} 
                        className="group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                      />
                      {product.images.length > 1 && (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                          {product.images.map((_, imgIndex) => (
                            <div 
                              key={imgIndex} 
                              className={`w-1.5 h-1.5 rounded-full ${currentImg === imgIndex ? 'bg-black' : 'bg-neutral-300'}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold tracking-tight mb-2">{product.title}</h3>
                      <p className="text-neutral-600 text-sm tracking-tight mb-3">
                        {product.description.split('.')[0]}.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium">{product.price}</span>
                        <span className={`text-xs uppercase tracking-tight ${product.stockColor}`}>
                          {product.stock}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="flex justify-center">
              <button 
                onClick={() => navigate('/shop')}
                className="cursor-pointer flex gap-2 transition-all duration-300 ease hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px] text-sm font-bold font-montserrat text-center bg-white border-black border-2 rounded-md pt-1.5 pr-2 pb-1.5 pl-2 shadow-[5px_5px_0px_black] gap-x-2 gap-y-2 items-center justify-center">
                Shop Best Sellers
                <svg className="w-6 h-6 transition-all duration-300 ease-in-out" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeProductModal}></div>
          
          {/* Modal Content Container */}
          <div className="relative h-full flex items-center justify-center p-6">
            <div className="relative max-w-4xl w-full bg-white border-8 border-black rounded-[28px] max-h-[90vh] overflow-hidden">
              
              {/* Grid Layout */}
              <div className="grid lg:grid-cols-2 h-full min-h-[500px] lg:min-h-[600px]">
                {/* Left - Image */}
                <div className="bg-neutral-50 rounded-l-[20px] overflow-hidden relative">
                  <img 
                    className="w-full h-full object-cover" 
                    src={selectedProduct.images[modalImageIndex]} 
                    alt={selectedProduct.title}
                  />
                  {selectedProduct.images.length > 1 && (
                    <>
                      <button
                        onClick={prevModalImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextModalImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProduct.images.map((_, imgIndex) => (
                          <div 
                            key={imgIndex} 
                            className={`w-2 h-2 rounded-full ${modalImageIndex === imgIndex ? 'bg-black' : 'bg-neutral-400'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                {/* Right - Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">
                        {selectedProduct.title}
                      </h2>
                      <p className="text-xl font-medium mb-1">{selectedProduct.price}</p>
                      <p className={`text-xs uppercase tracking-tight ${selectedProduct.stockColor}`}>
                        {selectedProduct.stock}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium tracking-tight mb-3 text-neutral-700 uppercase">
                        Description
                      </h3>
                      <p className="text-neutral-600 leading-relaxed tracking-tight mb-6">
                        {selectedProduct.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium tracking-tight mb-3 text-neutral-700 uppercase">
                          Size
                        </h3>
                        <div className="flex gap-2">
                          {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                            <button 
                              key={size}
                              className="border-2 border-black px-3 py-1 text-sm rounded-md bg-white hover:bg-neutral-100 transition-colors"
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <button className="cursor-pointer flex gap-2 transition-all duration-300 ease hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px] text-sm font-bold font-montserrat text-center bg-white border-black border-2 rounded-md pt-2 pr-4 pb-2 pl-4 shadow-[5px_5px_0px_black] items-center justify-center flex-1">
                        Add to Cart
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                      <button className="cursor-pointer transition-all duration-300 ease hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px] text-sm font-bold font-montserrat text-center bg-white border-black border-2 rounded-md pt-2 pr-4 pb-2 pl-4 shadow-[5px_5px_0px_black] flex items-center justify-center">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Close Button */}
            <button 
              onClick={closeProductModal} 
              className="fixed top-6 right-6 z-[101] w-12 h-12 bg-black text-white rounded-full flex items-center justify-center transition-all duration-200 hover:bg-neutral-800 hover:scale-110 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BestSellers;
