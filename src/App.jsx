import styles from "./styles";
import React, { useState, useEffect } from 'react';
import { loading } from "./assets"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar, Divider } from "./components";
import { ContactPage, Homepage, GalleryPage, AboutPage, NotFoundPage, } from "./pages";

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    <BrowserRouter>
      {contentLoaded ? (
        <div className="bg-primary w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar scrollToSection={scrollToSection} />
            </div>
          </div>

          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Routes>
                
                <Route path="/" element={<Homepage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/galerie" element={<GalleryPage />} />
                <Route path="/despre" element={<AboutPage />} />

                <Route path="*" element={<NotFoundPage />} />
              </Routes>
              <Footer />
            </div>
          </div>
          <Divider />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </BrowserRouter>
  );
};

export default App;
