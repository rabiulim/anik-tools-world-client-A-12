
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ToolBuy from './components/Home/ToolBuy';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/tool/:toolId' element={<ToolBuy />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
