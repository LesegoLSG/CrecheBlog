import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./Components/Header/Header";
import { NavigationProvider } from "./Components/Contexts/NavContext";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </NavigationProvider>
    </BrowserRouter>
  );
};

export default App;
