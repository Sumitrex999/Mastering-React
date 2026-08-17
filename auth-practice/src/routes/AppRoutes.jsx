import { Route, Routes } from 'react-router-dom'
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm/>} />
      <Route path="/register" element={<RegisterForm/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  )
}

export default AppRoutes;
