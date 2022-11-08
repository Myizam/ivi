import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'
import EditedMovie from './pages/EditedMovie'
import FavouritesPage from './pages/FavouritesPage'
import HomePage from './pages/HomePage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import MoviePage from './pages/MoviePage'
import NotFoundPage from './pages/NotFoundPage'
import ActivationPage from './pages/ActivationPage'
import Restore from './pages/Restore'
import FormPage from './pages/FormPage'
import PaymentPage from './pages/PaymentPage'
// import Rating from './pages/Rating'
import CartPage from './pages/CartPage'
const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/register' element={<RegistrationPage />}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path='/add' element={<AdminPage/>}/>
        <Route path='/edit/:id' element={<EditedMovie/>}/>
        <Route path='/fav' element={<FavouritesPage/>}/>
        <Route path='/movies' element={<MoviePage/>}/>
        <Route path='/details/:id' element={<MovieDetailsPage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<HomePage/>}/>
        <Route path='/activation' element={<ActivationPage />} />
        <Route path='/restore' element={<Restore />} />
        <Route path='/form' element={<FormPage />} />
        <Route path='/payment' element={<PaymentPage />} />
        {/* <Route path='/rating' element={<Rating />} /> */}
        <Route path='/cart' element={<CartPage />} />

        </Routes>
    </>
  )
}

export default MainRoutes