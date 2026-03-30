import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from "./pages/About"
import Login from "./pages/Login"
import Doctors from "./pages/Doctors"
import Profile from "./pages/Profile"
import Contact from "./pages/Contact"
import MyAppointments from "./pages/MyAppointments"
import Appointments from './pages/Appointments'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/myappointments' element={<MyAppointments/>}/>
        <Route path='/myprofile' element={<Profile/>}/>
        <Route path='/appointments/:docID' element={<Appointments/>}/>
      </Routes>
    </>
  )
}

export default App
