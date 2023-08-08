import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsDisplay from "./pages/Projects/ProjectsDisplay";
import ProjectsAll from "./pages/Projects/ProjectsAll";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="display"
        element={<ProjectsDisplay />}
        errorElement={<Error />}
      />
      <Route
        path="all"
        element={<ProjectsAll />}
        errorElement={<Error />}
      />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
