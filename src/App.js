import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from './components/Navbar/Navbar'
import Footer from "./Footer/Footer";
import AuthContextProvider from "./context/AuthContextProvider";
import MovieContextProvider from "./context/MovieContextProvider";
import FavContextProvider from "./context/FavContextProvider";
import CartContextProvider from "./context/CartContextProvider";



function App() {
  return (
    <>
    {/* <CartContextProvider> */}
    <FavContextProvider>
    <MovieContextProvider>
     <AuthContextProvider>
        <Navbar/>
          <MainRoutes />
          <Footer />
       </AuthContextProvider>
      </MovieContextProvider>
      </FavContextProvider>
      {/* </CartContextProvider> */}
    </>
  );
}

export default App;
