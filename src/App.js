import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup';
import Home from './pages/home';
import ProductDetail from './pages/productDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true"/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/" element={<ProductDetail/>} />
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
