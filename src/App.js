import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Logi/Login";
import Signup from "./Logi/Signup";
import Landing from "./Logi/Landing";
import { useState } from 'react';



function App() {
  
    const [users,setUsers] = useState(
      [
          {
            
          }
    
      ]
    )
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setUsers={setUsers} />}></Route>
          <Route path='/Signup' element={<Signup users={users} setUsers={setUsers} />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
  
        </Routes>
  
      </BrowserRouter>
    );
  }
  
  export default App;