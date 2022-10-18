// import logo from './logo.svg';
import './App.css';
import Navbar  from './components/Navbar';
// import Student from './components/student';
import TextForm from './components/TextForm';
// import About from './components/About'
import { useState } from 'react';
import Alert from './components/Alert'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";







function App() {
  const [mode, setMode] = useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#212529';
      document.body.style.color='#fff';
      showAlert("Dark mode enabled","light")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='#000';
      showAlert("Light mode enabled","success")
  }
  }
 

  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
   setAlert({
    msg:message,
    type:type
   })
  }
 return (
    <>

      
    {/* <Student name="Vinayak"/>
    <Student name="Pretti"/>
    <Student name="Karan" /> */}
    {/* <Router> */}
<Navbar title="TextUtils" showAlert={showAlert}  aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

{/* <TextForm showAlert={showAlert}  mode={mode} toggleMode={toggleMode} /> */}
  {/* <Navbar/> */}
{/* <About/> */}

<div className="container my-3">

{/* <Routes> */}
    {/* /users --> Component 1
        /users/home --> Component 2 */}
            
          {/* <Route exact path="/about" element={<About mode={mode}/>}>
          </Route> */}
          {/* <Route exact path="/" element={ */}
          <TextForm showAlert={showAlert} heading="Try TextUtils " mode={mode}/>
            
          {/* </Route>
    </Routes> */}





{/* <About/> */}
</div>
{/* </Router> */}
  </>
   
  );
}

export default App;

