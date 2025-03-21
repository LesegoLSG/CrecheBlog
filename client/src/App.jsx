import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./Components/Header/Header";
import { NavigationProvider } from "./Components/Contexts/NavContext";
import Footer from "./Components/Footer/Footer";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";
import AdminPrivateRoute from "./Components/Routes/AdminPrivateRoute";
import Services from "./pages/Services";
import ServicesDetailsPage from "./pages/ServicesDetailsPage";
import TopScroller from "./Components/Reusables/TopScroller";
import AboutDetailsPage from "./pages/AboutDetailsPage";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./Components/Reusables/ScrollToTop";
import SearchPage from "./pages/SearchPage";
import Donate from "./pages/Donate";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <Header />
        <TopScroller />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-details" element={<ServicesDetailsPage />} />
          <Route path="/about-details" element={<AboutDetailsPage />} />
          <Route path="/donation" element={<Donate />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/post/:postSlug" element={<PostPage />} />
          <Route path="/search" element={<SearchPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<AdminPrivateRoute />}>
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post/:postId" element={<UpdatePost />} />
          </Route>
        </Routes>
        <Footer />
      </NavigationProvider>
    </BrowserRouter>
  );
};

export default App;
