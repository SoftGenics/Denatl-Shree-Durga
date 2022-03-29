import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";
import FloatingWhatsApp from "react-floating-whatsapp";
import BookOnline from './Components/BookOnline/BookOnline'
import ScrollToTop from './Components/ScrollToTop'
import Faq from './Components/Faq/FAQ-ANS'
import PhotoGallery from './Components/Pages/PhotoGallery'
import Notification from './Components/Pages/WorkProgress'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Videos from "./Components/Pages/Videos";
import  RootCanal from './Components/Pages/RootCanal'
import Cosmetic from "./Components/Pages/Cosmetic";
import NotFound from "./Components/Pages/NotFound";
function App() {
  return (
      <>
  <BrowserRouter>
  <Header />
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book-now" element={<BookOnline />} />
      <Route path="/Faq" element={<Faq />} />
      <Route path="/photo-gallery" element={<PhotoGallery />} />
      <Route path="/video-gallery" element={<Videos />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/general" element={<RootCanal />} />
      <Route path="/cosmetic" element={<Cosmetic />} />
      <Route element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
<FloatingWhatsApp />
      </>
  );
}

export default App;
