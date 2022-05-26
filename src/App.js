
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrder from './components/Dashboard/MyOrder';
import MyProfile from './components/Dashboard/MyProfile';
import MyReviews from './components/Dashboard/MyReviews';
import Home from './components/Home/Home';
import ToolBuy from './components/Home/ToolBuy';
import Login from './components/Login/Login';
import RequireAuth from './components/Login/RequireAuth';
import SignUp from './components/Login/SignUp';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Portfolio from './components/Portfolio/Portfolio';
import AllOrders from './components/Dashboard/AllOrders';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import RequireAdmin from './components/Login/RequireAdmin';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/tool/:toolId' element={<RequireAuth><ToolBuy /></RequireAuth>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='myorders' element={<MyOrder></MyOrder>}></Route>
          <Route path='myreviews' element={<MyReviews />} ></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='allorders' element={<AllOrders />}></Route>
          <Route path='make-admin' element={<RequireAdmin><MakeAdmin /></RequireAdmin>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
