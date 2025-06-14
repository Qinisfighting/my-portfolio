import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Datenschutz from "./pages/Datenschutz";
import BlogEntry from "./pages/BlogEntry";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} errorElement={<Error />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route path="datenschutz" element={<Datenschutz />} />
      <Route path="blogEntry" element={<BlogEntry />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
