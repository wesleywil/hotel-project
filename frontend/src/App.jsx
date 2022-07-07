import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Homepage from './pages/homepage/homepage.component';
import AdminPage from './pages/admin/admin.component';
import Residences from './pages/residences/residences.components';
import Details from './pages/details/details.component';
import Profile from './pages/profile/profile.component';
import SignIn from './pages/signin/signin.component';
import SignUp from './pages/signup/signup.component';
import Payment from './pages/payment/payment.component';

// Components
import NavBar from './components/navbar/navbar.component';





function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route exact='true' path='/admin' element={<AdminPage/>}/>
        <Route exact='true' path='*' element={<Homepage/>}/>
        <Route path='residences' element={<Residences/>} />
        <Route  path='details'>
          <Route exact='true' path=':id' element={<Details/>}/>
        </Route>
        <Route exact='true' path='profile' element={<Profile/>}/>
        <Route exact='true' path='signin' element={<SignIn/>}/>
        <Route exact='true' path='signup' element={<SignUp/>}/>
        <Route exact='true' path='payment' element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
