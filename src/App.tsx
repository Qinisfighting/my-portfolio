//import { useState, useEffect } from 'react'
import { RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
 } from "react-router-dom"
 import Layout from "./components/Layout"
 import Error from "./components/Error"
 import Home from "./pages/Home"
 import About from "./pages/About" 
 import Works, { loader as worksLoader } from "./pages/Works/Works" 
 import WorkDetail, { loader as WorkDetailLoader } from "./pages/Works/WorkDetail"
 import Contact from "./pages/Contact" 

 const router = createBrowserRouter(createRoutesFromElements(
  /* */
  <Route path="/" element={<Layout />}>  
      <Route index  element={<Home  />} />
      <Route path='about' element={<About />} />
      <Route path='works' element={<Works />} loader={worksLoader} errorElement={<Error />} />
      <Route path="works/:id" element={<WorkDetail />} loader={WorkDetailLoader} errorElement={<Error />}/>       
      {/*1):id is a dynamic id variale, it should be identical to Vans.jsx line 19. 
      2)nested route is only used when you need to have a shared UI, here with vans detail route we don't need to nest.   */}
      <Route path="contact" element={<Contact />} />
    
      {/*catchall route with path='*' */} 
  </Route>
  
  ))
  
  
  function App() {
     

  return (
  <RouterProvider router={router}/>
  )
  }

export default App
