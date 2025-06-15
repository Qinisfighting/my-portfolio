// components/ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

import { ReactNode } from "react";

import type { User } from "firebase/auth";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  if (user === undefined) return null; // Loading state
  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
