import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from './components/Navbar/Navbar'
import Footer from "./Footer/Footer";


function App() {
  return (
    <>
    <Navbar/>
    <MainRoutes />
    <Footer />
    </>
  );
}

export default App;
