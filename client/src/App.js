import React from 'react';
import Navbar from './components/Common/Navbar'
import Footer from './components/Common/Footer'
import Home from './components/Home/index'

function App() {
  return (<div className="d-flex" style={{flexDirection:'column', justifyContent:'space-between',height:'100vh'}}>
    <Navbar />
    <Home/>
    <Footer />
    </div>
  );
}

export default App;
