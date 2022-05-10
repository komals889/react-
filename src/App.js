import {BrowserRouter,Route} from 'react-router-dom' 
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import LogOut from './pages/LogOut';
import Profile from './pages/Profile';
import Register from './pages/Register';
 

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Route path="/login" exact component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/home" component={Home}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/logout" component={LogOut}/>
      
       
    </BrowserRouter>
  );
}

export default App;
