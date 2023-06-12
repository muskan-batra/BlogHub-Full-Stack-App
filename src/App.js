import {Routes , Route} from 'react-router-dom'
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './Components/Navbar';
import './Pages/style.scss'
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Single from './Pages/Single';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar/>
     <Routes>
  <Route path="/" element={<Login/>} />
  <Route path="/register" element={<Register/>} />
  <Route path="/home" element={<Home/>} />
  <Route path="/single" element={<Single/>} />
 </Routes>
<Footer/>
    </div>
    </div>
  );
}

export default App;
