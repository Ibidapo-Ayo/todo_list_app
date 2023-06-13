import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContainer from "./components";
import Signup from "./components/landingpage/Signup";
import SignIn from "./components/landingpage/SignIn";
import CompletedTasks from "./components/CompletedTasks";
import { TaskProvider } from "./components/taskContext";

function App() {
  return (
    <div>
      <TaskProvider>
      <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Signup />} /> */}
            {/* <Route path="/signin" element={<SignIn />} /> */}
            <Route path="/completedtasks" element={<CompletedTasks />} />
            <Route path="/" element={<AppContainer />} />
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </div>
  );
}

export default App;
