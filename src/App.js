import React from 'react'
import Navbar from './Layout/Navbar'
import Header from './Layout/Header';
import Companies from './Conponents/Companies';
import Claider from './Conponents/Claider';
import Valu from './Conponents/Valu';
import Contact from './Conponents/Contact';
import Start from './Conponents/Start';
import Footer from './Layout/Footer';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Companies />
      <Claider />
      <Valu />
      <Contact />
      <Start />
      <Footer />
    </div>
  )
}

export default App;
