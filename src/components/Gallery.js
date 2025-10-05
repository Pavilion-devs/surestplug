import React from 'react';

const Gallery = () => {
  const galleryImages = [
    { src: "/prahant-designing-studio-pCRtBOqHHIc-unsplash.jpg", alt: "Gold chunky ring" },
    { src: "/chalo-garcia-AuWcloIneXc-unsplash.jpg", alt: "Luxury jewelry collection" },
    { src: "/1millikarat-g9AVjHo_Irc-unsplash.jpg", alt: "Gold ring on hand" },
    { src: "/prahant-designing-studio-FV4STFfvcnw-unsplash.jpg", alt: "Elegant gold jewelry" },
    { src: "/shivi-WRo-r8iO1Xc-unsplash.jpg", alt: "Dainty gold rings" },
    { src: "/gabrielle-henderson-ORZmeJJJ_TY-unsplash.jpg", alt: "Hand chain jewelry" },
    { src: "/kate-bezzubets-NamABw0kjKE-unsplash.jpg", alt: "Gold accessories styling" },
    { src: "/jonathan-sanchez-Ahxw0gICnKw-unsplash.jpg", alt: "Luxury ring collection" },
    { src: "/muhseenah-adamo-PNXK2IxpyUA-unsplash.jpg", alt: "Gold jewelry flat lay" },
    { src: "/gabrielle-henderson-F2cV0JfUx3A-unsplash.jpg", alt: "Premium jewelry showcase" },
    { src: "/prahant-designing-studio-pCRtBOqHHIc-unsplash.jpg", alt: "Gold chunky ring" },
    { src: "/chalo-garcia-AuWcloIneXc-unsplash.jpg", alt: "Luxury jewelry collection" },
    { src: "/1millikarat-g9AVjHo_Irc-unsplash.jpg", alt: "Gold ring on hand" },
    { src: "/prahant-designing-studio-FV4STFfvcnw-unsplash.jpg", alt: "Elegant gold jewelry" },
    { src: "/shivi-WRo-r8iO1Xc-unsplash.jpg", alt: "Dainty gold rings" },
    { src: "/gabrielle-henderson-ORZmeJJJ_TY-unsplash.jpg", alt: "Hand chain jewelry" }
  ];

  return (
    <section className="sm:px-6 lg:px-8 sm:pb-20 max-w-7xl mr-auto ml-auto pt-10 pr-4 pb-20 pl-4">
      <div className="relative mt-8 sm:mt-12">
        <div className="mx-auto max-w-6xl overflow-hidden" 
             style={{
               maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)',
               WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)',
               maskComposite: 'intersect',
               WebkitMaskComposite: 'destination-in'
             }}>
          <div className="flex w-max" style={{animation: 'marquee-left 80s linear infinite', willChange: 'transform'}}>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 flex-shrink-0 sm:pr-4 pr-2 gap-x-2 gap-y-2">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]">
                  <img 
                    className="sm:h-28 lg:h-36 w-full h-20 object-cover" 
                    src={image.src} 
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
            {/* Duplicate for seamless scroll */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 flex-shrink-0 pr-2 sm:pr-4">
              {galleryImages.map((image, index) => (
                <div key={`duplicate-${index}`} className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]">
                  <img 
                    className="sm:h-28 lg:h-36 w-full h-20 object-cover" 
                    src={image.src} 
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
