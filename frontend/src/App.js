import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

// import RegLogin from './Components/auth1/RegLogin';
// import ForgotPassword from './Components/auth1/ForgotPassword';

import Login from './Views/Pages/Auth/Login';
import ForgotPassword from './Views/Pages/Auth/ForgotPassword';
import Registration from './Views/Pages/Auth/Registration';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    
    {/* <Route path='/' element={<RegLogin/>}/>
    <Route path='/forgot-password' element={<ForgotPassword/>}/> */}

    <Route path='/' element={<Login/>}/>
    <Route path='/sign-up' element={<Registration/>}/>
    <Route path='/forgot-password' element={<ForgotPassword/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
