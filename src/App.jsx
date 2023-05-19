import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import AppContainer from "./components";
import Signup from "./components/landingpage/Signup";
import SignIn from "./components/landingpage/SignIn";
import CompletedTasks from "./components/CompletedTasks";

function App() {


  return (
   <div>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Signup />} />
       <Route path='/signin' element={<SignIn />} />
       <Route path='/completedtasks' element={<CompletedTasks />} />
       <Route path='/home' element={<AppContainer />} />
     </Routes>
     </BrowserRouter>
     
   </div>
  );
}

export default App;
