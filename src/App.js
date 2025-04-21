import { AuthProvider } from './context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import Footer from './Pages/Footer/Footer';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/SignUp/SignUp';
import { useEffect } from 'react';
import Services from './Pages/Services/Services';
import Cleaning from './Pages/Cleaning/Cleaning';
import About from './Pages/About/About';
import Furniture from './Pages/Furniture/Furniture';
import './App.css';
import Admin from './Pages/Admin/Admin';
import Bookings from './Pages/Bookings/Bookings';
import { Header } from './Pages/Header';

function App() {
  useEffect(() => {
    document.title = 'Home-Services';
  }, []);

  return (
    <BrowserRouter>
      {/* Wrap AuthProvider inside BrowserRouter */}
      <AuthProvider>
        <div className="root">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/cleaning" element={<Cleaning />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Bookings" element={<Bookings />} />
            <Route>404 Not Found</Route>
          </Routes>
          <Footer />
        </div>
        <ToastContainer position="bottom-right" theme="colored" />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
