import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Homepage from './pages/homepage/homepage.component';
import Residences from './pages/residences/residences.components';
import DetailsResidence from './pages/details-residences/details-residences.component';
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
        <Route exact='true' path='*' element={<Homepage/>}/>
        <Route path='residences'>
          <Route exact='true' path='all' element={<Residences type={'all'}/>}/>
          <Route exact='true' path='cabins' element={<Residences type={'cabins'}/>}/>
          <Route exact='true' path='hotels' element={<Residences type={'hotels'}/>}/>
        </Route>
        <Route  path='details'>
          <Route exact='true' path='cabins' element={<DetailsResidence type={'cabins'}/>}/>
          <Route exact='true' path='hotels' element={<DetailsResidence type={'hotels'}/>}/>
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
