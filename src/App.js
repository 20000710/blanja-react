import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup';
import Home from './pages/home';
import ProductDetail from './pages/productDetail';
import Profile from './pages/profile';
import Auth from './components/auth/auth';
import Page404 from './pages/page404';
import Checkout from './pages/checkout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Auth><Profile /></Auth>} />
          <Route path="/product/:id" element={<Auth><ProductDetail /></Auth>} />
          <Route path="/checkout" element={<Auth><Checkout /></Auth>}></Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
