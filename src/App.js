
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import './App.css';
// import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUs from './Pages/ContactUs';
import Shop from './Pages/Shop';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Login from './Components/Login';
import ParallaxEndSection from './Components/Member';


function App() {
  return (
    <div >
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="Member" element={<ParallaxEndSection />} />
      </Routes>
      
     </BrowserRouter>
    </div>
  );
}

export default App;
