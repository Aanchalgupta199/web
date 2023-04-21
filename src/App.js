import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Admission from './components/Admission';
import DUWBMaster from './components/DUWBMaster';
import GetPatients from './components/GetPatients';
import Home from './components/Home';
import Registration from './components/Registration';
import StatusDashboard from './components/StatusDashboard';
import UpdatePatient from './components/UpdatePatient';
import Doctors from './components/Doctors'
import Contact from './components/Contact';
import "./App.css";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='register' element={<Registration/>} />
          <Route path='admission' element={<Admission/>} />
          <Route path='getPatients' element={<GetPatients />} />
          <Route path='updatePatient' element={<UpdatePatient/>} />
          <Route path='/statusDashboard' element={<StatusDashboard/>} />
        </Route>
        <Route path='/about' element={<About/>} />
        <Route path='/department' element={<DUWBMaster/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
