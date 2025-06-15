import { useState, useEffect } from "react";
import upArrow from "../assets/upArrow.png";
import write from "../assets/write.png";
import { useLocation, useNavigate } from "react-router-dom";
import backIcon from "../assets/back2.png";
import { useRouteHistory } from "../contexts/RouteContext";

export default function Footer() {
  const [isTop, setIsTop] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { previousRoute } = useRouteHistory();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setIsTop(true) : setIsTop(false);
    });
  }, []);

  function goTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  const isBlogEntry = location.pathname === "/blogEntry";
  return (
    <footer>
      {isTop ? (
        <img src={upArrow} className="go-top" onClick={goTop} alt="toTop" />
      ) : isBlogEntry ? (
        <img
          src={backIcon}
          className="write"
          alt="back"
          onClick={() => {
            if (previousRoute) navigate(previousRoute);
            else navigate("/");
          }}
        />
      ) : (
        <img
          src={write}
          className="write"
          alt="write"
          onClick={() => navigate("/blogEntry")}
        />
      )}

      <h5>
        © {new Date().getFullYear()} by{" "}
        <a
          href="https://www.yanqin.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          QIN's c♡de
        </a>
      </h5>
    </footer>
  );
}
