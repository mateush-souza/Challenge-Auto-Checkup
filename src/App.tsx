import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css'

import Footer from './layout/Footer'
import Menu from './layout/Header'

import Home from './pages/public/home/Home'
import Members from './pages/public/members/Members';
import Login from './pages/public/Login';

function App() {

  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={
            <Home />
          }/>
          <Route path='/membros' element={
            <Members/>
          }/>
          <Route path='/login' element={
            <Login/>
          }/>
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
