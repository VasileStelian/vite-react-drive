import styles from "./styles";
import React, { useState, useEffect } from 'react';
import { loading } from "./assets"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { ContactPage, Homepage, GalleryPage, AboutPage, NotFoundPage, CategoriesPage } from "./pages";

const LoadingScreen = () => (
  <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-wrap flex-col items-center justify-center bg-black z-50">
    <img src={loading}/>
    <div className="text-gradient font-poppins font-bold">Se încarcă...</div>
  </div>
);

const App = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
  
    const loadingTimeout = setTimeout(() => {
      setContentLoaded(true);
    }, 2000);

  
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  
  return (
    <BrowserRouter>
      {contentLoaded ? (
        <main className=" w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>

          <div className={` ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Routes>
                
                <Route path="/" element={<Homepage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/categorii" element={<CategoriesPage />} />
                <Route path="/galerie" element={<GalleryPage />} />
                <Route path="/despre" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
              <Footer />
            </div>
          </div>
    <div className=' top-0 left-0 h-full -z-50 fixed '>
          <div id="move" className="blob z-1 pointer-events-none"></div>
          <div className="blob z-1 pointer-events-none text-white">made by razor</div>
          <div className="blob z-1 pointer-events-none"></div>
    </div>
        </main>
      ) : (
        <LoadingScreen />
      )}
    </BrowserRouter>
  );
};

export default App;
