import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // your Firebase init
import { useNavigate } from "react-router-dom";
import { useRouteHistory } from "../contexts/RouteContext";

function BlogEntry() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const email = import.meta.env.VITE_FIREBASE_USER_EMAIL;
  const navigate = useNavigate();
  const { previousRoute } = useRouteHistory();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pin);
      // navigate back here:
      if (previousRoute) navigate(previousRoute);
      else navigate("/");
    } catch {
      setError("Invalid PIN");
    }
  };
  return (
    <div className="entry--container">
      <form className="entry--form" onSubmit={handleLogin}>
        <input
          className="entry--input"
          type="password"
          value={pin}
          onFocus={() => setError("")}
          onChange={(e) => setPin(e.target.value)}
          placeholder="Host PIN"
        />
        <button type="submit" className="entry--submit">
          ENTER
        </button>
        {error && <p className="entry--error">{error}</p>}
      </form>
    </div>
  );
}

export default BlogEntry;
