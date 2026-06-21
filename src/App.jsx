import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Committees from './pages/Committees';
import Event from './pages/Event';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="committees" element={<Committees />} />
          <Route path="event" element={<Event />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return <AnimatedRoutes />;
}
