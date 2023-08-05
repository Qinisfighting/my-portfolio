import { useState, useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useOutletContext } from "react-router-dom";

type ContextType = {isGerman: boolean};

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
        <Outlet context = {{isGerman} satisfies ContextType} /> console.log(useOutletContext)
      </main>
      <Footer />
    </div>
  );
}

export function useLangContext() {
  return useOutletContext<ContextType>();
}
//https://reactrouter.com/en/main/hooks/use-outlet-context