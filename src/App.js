import './App.css'
import { Navbar, Main, Footer, Menu, Reservations, OrderOnline, Login } from './components'
import { Routes, Route } from 'react-router-dom'
// import DataContext from './DataContext';

// Finish stlying Booking Form

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path = '/' element = { <Main /> } />
        <Route path = '/LittleLemon' element = { <Main /> } />
        <Route path = '/Menu' element = { <Menu /> } />
        <Route path = '/Reservations' element = { <Reservations /> } />
        <Route path = '/OrderOnline' element = { <OrderOnline /> } />
        <Route path = '/Login' element = { <Login /> } />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
