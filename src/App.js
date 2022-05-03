import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Loading from './components/Loading';
import TravelToUser from './components/TravelsToUser';
import HomePage from './components/HomePage';
import Windows_hello from './components/windows_hello'
import CustomizedMenus from './components/aa'

function App() {
  return (<>
  {/* <CustomizedMenus></CustomizedMenus> */}
    <HomePage></HomePage>     
    {/* <Windows_hello></Windows_hello> */}
  </> 
  );
}

export default App;
