import React, { useState, useEffect } from "react";
import { gallery } from "../constants";
import { close } from "../assets";
import { Carousel } from "flowbite-react";

const GalleryCard = ({ picArray, title, content, onClick }) => (
  <div
    className="flex flex-col text-center cursor-pointer justify-center w-[300px] my-2 rounded-sm"
    onClick={() => onClick(picArray, content)}
  >
      
 
    <div className="flex justify-center flex-1  mb-2">
      <img
        src={picArray[0]}
        alt={title}
        className="object-cover w-full h-full rounded-sm md:opacity-50 transition hover:opacity-100"
      />
    </div>
    <h1 className="font-poppins font-semibold justify-center text-white mb-4 ss:mb-0">
      {title}
    </h1>
  </div>
);

const Gallery = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);

  useEffect(() => {
    const body = document.body;
    body.style.overflow = selectedGallery ? "hidden" : "visible";

    return () => {
      body.style.overflow = "visible";
    };
  }, [selectedGallery]);

  const handleGalleryClick = (picArray, content) => {
    setSelectedGallery({picArray, content });
  };

  return (
    <section className="">
      <div className="flex flex-wrap flex-row justify-around z-20">
        {[...gallery].map((galleryItem) => (
          <GalleryCard
            key={galleryItem.id}
            {...galleryItem}
            onClick={handleGalleryClick}
          />
        ))}
      </div>

      {selectedGallery && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20 bg-black/70 m-2">
          <div className="ss:hidden block w-[300px] h-[300px]">
            <div className="flex justify-end p-2">
              <button
                onClick={() => setSelectedGallery(null)}
                className="text-cyan-100 font-bold transition-all hover:text-cyan-300 cursor-pointer flex items-center"
              >
                <img src={close} className="mr-2" alt="Close" />
              </button>
            </div>

            <Carousel slide={false}>
              {selectedGallery.picArray.map((pic, index) => (
                <img
                  loading="lazy"
                  key={index}
                  src={pic}
                  alt={`Gallery ${index + 1}`}
                />
              ))}
            </Carousel>
            <div className="bg-black/90 mt-1 rounded ">
           <p className="text-white max-w-[600px] font-poppins text-justify mt-5">{selectedGallery.content}</p>
           </div>
            
          </div>
          <div className="ss:block hidden bg-black/50 p-6 rounded-lg overflow-y-auto ">
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedGallery(null)}
                className="text-cyan-100 font-bold transition-all mb-4 hover:text-cyan-300 cursor-pointer flex items-center"
              >
                <img src={close} className="mr-2" alt="Close" />
                <span className="hidden ss:block">Inchide</span>
              </button>
            </div>
            <div className=" w-[600px] h-[600px]">
              <Carousel slide={false}>
                {selectedGallery.picArray.map((pic, index) => (
                  <img key={index} src={pic} alt={`Gallery ${index + 1}`} />
                ))}
              </Carousel>
            </div>
            <p className="text-white max-w-[600px] font-poppins text-justify mt-5">{selectedGallery.content}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
