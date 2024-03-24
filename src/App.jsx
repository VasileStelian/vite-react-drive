import styles from "./styles";
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { ContactPage, Homepage, GalleryPage, AboutPage, NotFoundPage, CategoriesPage } from "./pages";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"


Deploy & Visit your Site

Deploy your changes and visit the deployment to collect your page views.

If you don't see data after a 30 seconds, please check for content


const App = () => {
  
  return (
    <BrowserRouter>
        <main className=" w-full overflow-hidden">
        <SpeedInsights/>
        <Analytics/>
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
    </BrowserRouter>
  );
};

export default App;
