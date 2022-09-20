import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About'; 
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route, Link, Routes, BrowserRouter, HashRouter} from 'react-router-dom';



//<BrowserRouter basename={process.env.PUBLIC_URL}>


function App() {
  return (
    <HashRouter >
    <div >
      <Navbar />
    </div>

      <Routes>

        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />


          {/* 👇️ only match this when no other routes match */}
        <Route path="*" element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
        />
        
        </Routes>
        
  </HashRouter>

  );
}

export default App;
