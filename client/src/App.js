import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { ProfilePage } from './pages/ProfilePage';

import { FeedPage } from './pages/FeedPage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import Paper from '../src/Paper.png'
import { HomePage } from './pages/HomePage';
import { FixedFooter } from './components/FixedFooter';
import { ModalProvider } from './hooks/useContext/ModalContext';



function App() {
    // Background style 
    const BgTexture = {
      backgroundImage: `url(${Paper})`,
      backgroundSize: 'cover',
    }
  
  return (
    <div style={BgTexture}>
    <BrowserRouter>
      <ModalProvider>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/profilepage' element={<ProfilePage/>}/>
          <Route path='/feedpage' element={<FeedPage/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
        </Routes>
        <FixedFooter />
      <Footer />
      </ModalProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
