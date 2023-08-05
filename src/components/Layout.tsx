import { useState, useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";



export default function Layout() {
  //localStorage.getItem() can return either a string or null. JSON.parse() requires a string, 
  //use the non-null(!) assertion operator to tell typescript that localStorage.getItem() call can never return null.
  const currentLang = JSON.parse(localStorage.getItem("isGerman")!) 
  const [isGerman, setIsGerman] = useState<boolean>(() => currentLang);

  

  useEffect(() => {
    localStorage.setItem('isGerman', JSON.stringify(isGerman));
  }, [isGerman]);

  return (
    <div className="site-wrapper">
      <Header isGerman={isGerman} toggleGerman={() => setIsGerman(prev => !prev)} />
      <main>
        <Outlet context = {[isGerman]} />
      </main>
      <Footer />
    </div>
  );
}
