
import '../styles/globals.scss'
import data from "../pages/dummy.data/data.json"
import React, { useState } from "react";
import Header from './components/header';
import Footer from './components/footer';

function MyApp({ Component, pageProps }) {
  const [toDoList, setToDoList] = useState(data);
  
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
      
    </div>
   
  )
}

export default MyApp
