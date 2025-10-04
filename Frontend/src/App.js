import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import News from './components/News';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Newsletters from './components/Newsletters';
import About from './components/About';
// import { AuthContext } from './contexts/AuthContext';
import './index.css';
import './footer.css';
import './header.css';


const AppContent = () => {
  // const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();
  const shouldShowHeaderAndFooter = !['/signin', '/signup'].includes(location.pathname);

  return (
    <>
      {shouldShowHeaderAndFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/newsletters" element={<Newsletters />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {shouldShowHeaderAndFooter && <Footer />}
    </>
  );
};

function App() {
  return <AppContent />;
}

export default App;