
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import './App.css';
// import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUs from './Pages/ContactUs';
import Shop from './Pages/Shop';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';


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
      </Routes>
      
     </BrowserRouter>
    </div>
  );
}

export default App;
