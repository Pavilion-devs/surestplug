import React, { useState } from 'react';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const allProducts = [
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
      title: "Luxury Jewelry Collection",
      price: "₦45,000",
      stock: "In Stock",
      stockColor: "text-green-600",
      description: "Multiple jewelry pieces styled together. Perfect for the complete look with matching accessories.",
      images: ["/9.png"],
      category: "collection"
    },
    {
      title: "Golden Adornment Set",
      price: "₦38,000",
      stock: "In Stock",
      stockColor: "text-green-600",
      description: "Professional jewelry flat lay arrangement. Beautiful gold pieces that complement each other perfectly.",
      images: ["/10.png"],
      category: "collection"
    },
    {
      title: "Antique Gold Woven Bracelet",
      price: "₦35,000",
      stock: "In Stock",
      stockColor: "text-green-600",
      description: "Substantial woven chain bracelet with antique gold finish and lobster clasp. Vintage-inspired elegance.",
      images: ["/11.png"],
      category: "bracelets"
    },
    {
      title: "Diamond Disc Bracelet",
      price: "₦42,000",
      stock: "Limited Stock",
      stockColor: "text-neutral-500",
      description: "Alternating gold discs and diamond-set discs with sparkling detail. Luxurious and eye-catching.",
      images: ["/12.png"],
      category: "bracelets"
    },
    {
      title: "Elegant Chain Link Bracelet",
      price: "₦29,000",
      stock: "In Stock",
      stockColor: "text-green-600",
      description: "Polished gold chain links with smooth, reflective surface. Classic elegance with modern appeal.",
      images: ["/13.png", "/14.png", "/15.png", "/16.png"],
      category: "bracelets"
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

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'chunky-rings', name: 'Chunky Rings' },
    { id: 'dainty-rings', name: 'Dainty Rings' },
    { id: 'hand-chains', name: 'Hand Chains' },
    { id: 'bracelets', name: 'Bracelets' },
    { id: 'collection', name: 'Collections' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setModalImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = '';
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
      <section className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-32 pr-4 pl-4 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            Shop Collection
          </h1>
          <p className="text-lg text-neutral-600 tracking-tight max-w-2xl mx-auto">
            Discover our complete range of luxury jewelry. Each piece is crafted with attention to detail and designed to elevate your style.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium text-sm tracking-tight transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-black text-white'
                  : 'bg-white border-2 border-black hover:bg-neutral-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
              onClick={() => openProductModal(product)}
            >
              <div className="overflow-hidden transition-transform group-hover:translate-x-1 group-hover:translate-y-1 bg-white border-black border-4 rounded-[20px]">
                <div className="aspect-square bg-neutral-100 overflow-hidden relative">
                  <img 
                    src={product.images[0]} 
                    alt={product.title} 
                    className="group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                  />
                  {product.images.length > 1 && (
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      +{product.images.length} photos
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold tracking-tight mb-1">{product.title}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-base font-medium">{product.price}</span>
                    <span className={`text-xs uppercase tracking-tight ${product.stockColor}`}>
                      {product.stock}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-neutral-600 text-lg">No products found in this category.</p>
          </div>
        )}
      </section>

      {/* Product Modal - Same as BestSellers */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-[100]">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeProductModal}></div>
          
          <div className="relative h-full flex items-center justify-center p-6">
            <div className="relative max-w-4xl w-full bg-white border-8 border-black rounded-[28px] max-h-[90vh] overflow-hidden">
              
              <div className="grid lg:grid-cols-2 h-full min-h-[500px] lg:min-h-[600px]">
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

export default Shop;
