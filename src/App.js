import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import Navbar from './page/NavBar/Navbar';
import Login from './page/Login/Login';
import SignUp from './page/SignUp/SignUp';
import RequireAuth from './page/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
