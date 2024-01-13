import { useState, useEffect } from "react";    
import upArrow from "../assets/upArrow.png";


export default function Footer() {
    const [isTop, setIsTop] = useState<boolean>(false);
  
    useEffect(() => {
      window.addEventListener("scroll", () => {
        window.scrollY > 300 ? setIsTop(true) : setIsTop(false);
      });
    }, []);
  
    function goTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  
    return (
      <footer>
        {isTop && (
          <img src={upArrow} className="go-top" onClick={goTop} alt="toTop" />
        )}
        
        <a href="https://www.yanqin.de" target="_blank">
          <h4>QIN勤©2023 up&qu</h4>
        </a>
      </footer>
    );
  }
  