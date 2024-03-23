import React, { useState, useEffect } from "react";
import { categories } from "../constants";
import { close, arrowUp } from "../assets";
import styles, { layout } from "../styles";

const CategoryCard = ({ icon, title, content, onClick }) => (
  <div
    className={`flex p-6 rounded-[20px] ss:bg-black/30 bg-dimBlue hover:bg-black/80 transition mb-2`}
    onClick={onClick}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt={title} className="w-[70%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <div className="flex justify-between">
      <h2 className="font-poppins text-neonPink font-semibold cursor-pointer text-white text-[25px] leading-[23.4px] mb-2">
        {title}
      </h2>
      <svg class=' expand-arrow w-[30px]' clip-rule="evenodd" fill="#fe4875" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 2c5.517 0 9.997 4.48 9.997 9.998 0 5.517-4.48 9.997-9.997 9.997-5.518 0-9.998-4.48-9.998-9.997 0-5.518 4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.497 8.498 8.497 8.497-3.807 8.497-8.497-3.807-8.498-8.497-8.498zm4.845 6.711c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291zm-7.564.289h5.446l-2.718 3.522z" fill-rule="nonzero"/></svg>
          </div>
      <p className="font-poppins cursor-pointer font-normal text-dimWhite text-[16px] leading-[24px] line-clamp-4">
        {content}
      </p>
    </div>
  </div>
  
);

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const body = document.body;

    if (selectedCategory) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }

    return () => {
      body.style.overflow = "visible";
    };
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <section id="categories" className={layout.section}>
      <div className="md:w-[350px] mx-auto">
        <h2 className={`${styles.heading2} cursor-default`}>
          Alege <span className="text-gradient">categoria</span> dorita!
        </h2>
        <p className={`${styles.paragraph} cursor-default max-w-[470px] mt-5 `}>
          Descoperă detalii suplimentare despre categoria de vehicule pe care ai
          intenția să le conduci.
          
        </p>
        <div className="hidden md:flex">
          <div className="absolute hidden ss:block w-[50%] h-[80%] right-20 bottom-1  blue__gradient" />
          <div className="absolute w-[20%] h-[20%] right-20 pink__gradient" />
        </div>
      </div>

      <div
        className={`${layout.sectionImg} ss:grid grid-cols-2 gap-2 flex-col`}
      >
        {[...categories].map((category) => (
          <CategoryCard
            key={category.id}
            {...category}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </div>

      {selectedCategory && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10 bg-black/50 m-2">
          <div className="bg-black/90 p-6 rounded-lg max-w-[600px] w-full overflow-y-auto ">
            <div className="flex justify-end">
              <button
                onClick={() => handleCategoryClick(selectedCategory)}
                className="text-cyan-100 font-bold transition-all hover:text-cyan-300 cursor-pointer flex items-center"
              >
                <svg class='rotate-180 expand-arrow w-[30px]' clip-rule="evenodd" fill="#fe4875" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 2c5.517 0 9.997 4.48 9.997 9.998 0 5.517-4.48 9.997-9.997 9.997-5.518 0-9.998-4.48-9.998-9.997 0-5.518 4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.497 8.498 8.497 8.497-3.807 8.497-8.497-3.807-8.498-8.497-8.498zm4.845 6.711c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291zm-7.564.289h5.446l-2.718 3.522z" fill-rule="nonzero"/></svg>
                <span className="hidden text-neonPink ss:block">Inchide</span>
              </button>
            </div>
            <div className="flex">
              <div
                className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-neonPink/50 hidden ss:flex`}
              >
                <img
                  src={selectedCategory.icon}
                  alt="star"
                  className="w-[70%] object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-poppins  font-semibold cursor-default text-neonPink text-[25px] leading-[23.4px] mb-2">
                  {selectedCategory.title}
                </h4>
                <p className="font-poppins cursor-default font-normal text-dimWhite text-[16px] leading-[24px] text-justify">
                  {selectedCategory.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Categories;
