import logo from './logo.svg';
import Login from './Component/Register/Login'
import SignUp from './Component/Register/SignUp';
import Password from './Component/Register/Password'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Fetch from './Component/Fetch';
import Filter from './Component/Filter';
import Hello from './Hello';
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Login />}  />
    //     <Route path='/SignUp' element={<SignUp />} />
    //     <Route path='/Password' element={<Password />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      {/* <Fetch /> */}
      {/* <Filter /> */}
      <Hello />
    </div>
  );
}

export default App;
