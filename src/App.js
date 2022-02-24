import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Loading from './components/Loading';
import TravelToUser from './components/TravelsToUser';
import HomePage from './components/HomePage';

function App() {
  return (<>
   <HomePage></HomePage>
    {/* <div className="auth-wrapper">
      <div className="auth-inner"><Login></Login>
      </div>
    </div> 
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Register></Register>
      </div>
    </div>*/}
    {/* <div className="auth-wrapper">
      <div className="auth-inner">
        <Login></Login>
      </div>
    </div> */}
    {/* 
      <br />
      
      <br />
      <Loading></Loading>
      <br />
    <TravelToUser></TravelToUser> */}
  </>
  );
}

export default App;
