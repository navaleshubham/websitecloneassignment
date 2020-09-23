import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/nav.component';
import Sec1 from './component/section1.component';
import Sec2 from "./component/section2.component";
import Sec3 from "./component/section3.component";
import Footer from "./component/footer.component";
function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Sec1></Sec1>
        <Sec2></Sec2>
        <Sec3></Sec3>
        <Footer></Footer>
    </div>
  );
}

export default App;
