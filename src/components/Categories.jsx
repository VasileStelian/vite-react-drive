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
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <div className="flex justify-between">
      <h1 className="font-poppins font-semibold cursor-pointer text-white text-[25px] leading-[23.4px] mb-2">
        {title}
      </h1>
      <img
            src={arrowUp}
            className="w-[25px]"
          />
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
          <div className="bg-gradient-to-r from-cyan-950 to to-cyan-600 p-6 rounded-lg max-w-[600px] w-full overflow-y-auto ">
            <div className="flex justify-end">
              <button
                onClick={() => handleCategoryClick(selectedCategory)}
                className="text-cyan-100 font-bold transition-all hover:text-cyan-300 cursor-pointer flex items-center"
              >
                <img src={close} className="mr-2" />
                <span className="hidden ss:block">Inchide</span>
              </button>
            </div>
            <div className="flex">
              <div
                className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-black/50 hidden ss:flex`}
              >
                <img
                  src={selectedCategory.icon}
                  alt="star"
                  className="w-[50%] h-[50%] object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-poppins font-semibold cursor-default text-gradient text-[25px] leading-[23.4px] mb-2">
                  {selectedCategory.title}
                </h4>
                <p className="font-poppins cursor-default font-normal text-white text-[16px] leading-[24px] text-justify">
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
