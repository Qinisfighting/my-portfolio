//import { useState, useEffect } from 'react'
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
import ProjectsDisplay, {
  loader as projectsLoader
} from "./pages/Projects/ProjectsDisplay";
import ProjectsAll, { loader as allLoader } from "./pages/Projects/ProjectsAll";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    /* */
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="display"
        element={<ProjectsDisplay />}
        loader={projectsLoader}
        errorElement={<Error />}
      />
      <Route
        path="all"
        element={<ProjectsAll />}
        loader={allLoader}
        errorElement={<Error />}
      />
      {/*1):id is a dynamic id variale, it should be identical to Vans.jsx line 19. 
      2)nested route is only used when you need to have a shared UI, here with vans detail route we don't need to nest.   */}
      <Route path="contact" element={<Contact />} />

      {/*catchall route with path='*' */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
