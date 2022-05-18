import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import Navbar from './page/NavBar/Navbar';
import Login from './page/Login/Login';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
