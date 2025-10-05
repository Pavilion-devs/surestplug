import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackgroundImage = () => {
  const navigate = useNavigate();

  return (
    <>
 
 {/* Full Screen Image 2 */}
        <section className="relative h-screen w-full overflow-hidden mt-16 sm:mt-24">
        <div className="z-10 flex h-full relative items-center justify-center">
        <button 
          onClick={() => navigate('/shop')}
          className="font-montserrat text-lg border-2 border-white rounded-md px-6 py-3 bg-white/10 backdrop-blur-sm text-white shadow-[5px_5px_0px_rgba(255,255,255,0.2)] cursor-pointer text-center font-bold flex items-center justify-center gap-2 transition-all duration-300 ease hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px] hover:bg-white/20">
            Shop New Collection
            <svg className="w-6 h-6 transition-all duration-300 ease-in-out" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd"></path>
            </svg>
        </button>
        </div>
        <div className="absolute inset-0">
        <img 
            src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/229f88ef-302d-48b7-83ec-782f2e90a099_800w.jpg" 
            alt="Fashion model showcase" 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        </div>
        </section>

    </>
  )
}

export default BackgroundImage;