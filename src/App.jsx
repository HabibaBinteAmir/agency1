import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './component/pages/Home'
import About from './component/pages/About'
import Rootlyout from './component/layouts/Rootlyout'
import FeaturePage from './component/pages/FeaturePage';
import Pricing from './component/pages/Pricing'; 
import MaimBlogPage from './component/pages/MaimBlogPage';
import Contactpage from './component/pages/Contactpage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<Rootlyout />}>
          
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="features" element={<FeaturePage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blog" element={<MaimBlogPage />} />
          <Route path="contact" element={<Contactpage />} />
          
        </Route>
      </Routes>
      
    </>
  )
}

export default App
