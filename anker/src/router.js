import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/userAuth/login'
import Otp from '../src/userAuth/otp';
import Signup from '../src/userAuth/signup';
import Codesuccess from '../src/userAuth/codesuccess';
import Dashboard from './components/dashboard';
import Learningportal from './pages/learningportal';
import Leaderboard from './pages/leaderboard';
import Redemption from './pages/redemption';
import Configuration from './pages/configuration';
import Addcourse from './components/Addcourse';
import Notfound from './pages/notfound';


export default function AppRoutes (){
    return(
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
       
        <Route path="/codesuccess" element={<Codesuccess />} />
        <Route path="/learningportal" element={<Learningportal />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/redemption" element={<Redemption />} />
        <Route path="/configuration" element={<Configuration />} />
        <Route path="/addcourse" element={<Addcourse />} />
        <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    )
}