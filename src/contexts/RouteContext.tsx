import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const RouteContext = createContext<{ previousRoute: string | null }>({
  previousRoute: null,
});

export function RouteProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [previousRoute, setPreviousRoute] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== currentPath) {
      setPreviousRoute(currentPath);
      setCurrentPath(location.pathname);
    }
  }, [location, currentPath]);

  return (
    <RouteContext.Provider value={{ previousRoute }}>
      {children}
    </RouteContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useRouteHistory() {
  return useContext(RouteContext);
}
