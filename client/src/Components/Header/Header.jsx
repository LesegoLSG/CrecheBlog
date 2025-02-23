import React, { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { useNavigates } from "../Contexts/NavContext";
import Logo1 from "../../assets/Logos/Logo1.png";
import { useSelector, useDispatch } from "react-redux";
import { signoutSuccess } from "../../redux/user/userSlice";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const { activeLink } = useNavigates();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Scroll to a section
  const scrollToSection = (section) => {
    const homeSection = document.getElementById(section);
    if (homeSection) {
      const position = homeSection.offsetTop;
      scroll.scrollTo(position, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }
  };

  // Navigating to the section
  const handleNavigateActive = (section) => {
    if (location.pathname === "/") {
      scrollToSection(section);
    } else {
      navigate("/", { state: { scrollTo: section } });
    }
    setIsNav(false);
  };

  // Navigate and set toggle for mobile devices
  const handleMobileClick = (section) => {
    toggleMenu();
    handleNavigateActive(section);
  };

  // Sign out functionality
  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <header
      className={`w-full px-4 py-2 md:px-16 border-b-2 
   `}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            src={Logo1}
            alt="logo1"
            className="w-28 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Links and Button for Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <ul className={`flex gap-4  font-semibold `}>
            <li>
              <ScrollLink
                onClick={() => handleNavigateActive("home")}
                className={`${activeLink === "home" ? "text-blue-400" : ""}`}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                onClick={() => handleNavigateActive("about")}
                className={`${
                  activeLink === "about" ? "text-blue-400" : ""
                } cursor-pointer`}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                onClick={() => handleNavigateActive("services")}
                className={`${activeLink === "search" ? "text-blue-400" : ""}`}
              >
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                onClick={() => handleNavigateActive("testimonials")}
                className={`${activeLink === "search" ? "text-blue-400" : ""}`}
              >
                Testimonials
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                onClick={() => handleNavigateActive("team")}
                className={`${activeLink === "search" ? "text-blue-400" : ""}`}
              >
                Our Team
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                onClick={() => handleNavigateActive("contact")}
                className={`${activeLink === "search" ? "text-blue-400" : ""}`}
              >
                Contact
              </ScrollLink>
            </li>
            <li>
              <Link
                to="/search"
                className={`${activeLink === "search" ? "text-blue-400" : ""}`}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <form className="hidden md:flex items-center border rounded-md px-2 bg-gray-100">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-transparent px-2 py-1 w-64 text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="text-gray-600 cursor-pointer" />
        </form>

        <div className="flex gap-x-4">
          {currentUser ? (
            <div className="relative">
              <div className="w-10 h-10">
                <img
                  alt="Picture"
                  src={
                    currentUser.profilePicture ||
                    "https://via.placeholder.com/150"
                  }
                  className={`w-full h-full object-fit rounded-full cursor-pointer`}
                  onClick={toggleDropdown}
                />
              </div>

              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-lg py-2 z-10"
                  ref={dropdownRef}
                >
                  <p className="px-4 py-2 text-sm text-gray-700 font-semibold">
                    {currentUser.email}
                  </p>
                  <Link
                    onClick={() => setDropdownOpen(false)}
                    to="/dashboard?tab=profile"
                    className="flex gap-x-4 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <ImProfile />
                    Profile
                  </Link>

                  <hr></hr>
                  {/* Sign out button */}

                  <button
                    className="w-full flex items-center gap-x-2 text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleSignOut}
                  >
                    <LiaSignOutAltSolid size={20} />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-x-2">
              <button className="button hidden md:block ">
                <span>
                  <Link to="/signup">Sign Up for free</Link>
                </span>
              </button>
              <button className="button-opposite hidden md:block ">
                <span className="">
                  <Link to="/signin">Sign In</Link>
                </span>
              </button>
            </div>
          )}

          {/* Mobile Menu Icon and avator*/}
          <div className="flex md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? (
                <FaTimes className="text-2xl text-blue-600" />
              ) : (
                <FaBars className="text-2xl text-blue-600" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`absolute bg-white top-12 left-0 w-full shadow-lg flex flex-col items-center md:hidden z-50`}
          >
            <ul className="flex flex-col gap-4 font-semibold py-6">
              <li>
                <ScrollLink
                  onClick={() => handleMobileClick("home")}
                  className={`${activeLink === "home" ? "underline" : ""}`}
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  onClick={() => handleMobileClick("about")}
                  className={`${activeLink === "about" ? "underline" : ""}`}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  onClick={() => handleMobileClick("services")}
                  className={`${
                    activeLink === "search" ? "text-blue-400" : ""
                  }`}
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  onClick={() => handleMobileClick("testimonials")}
                  className={`${
                    activeLink === "search" ? "text-blue-400" : ""
                  }`}
                >
                  Testimonials
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  onClick={() => handleMobileClick("team")}
                  className={`${
                    activeLink === "search" ? "text-blue-400" : ""
                  }`}
                >
                  Our Team
                </ScrollLink>
              </li>
              <li>
                <Link
                  to="/search"
                  className={`${activeLink === "search" ? "underline" : ""}`}
                  onClick={toggleMenu}
                >
                  Blogs
                </Link>
              </li>
            </ul>
            {!currentUser && (
              <div className="flex flex-col items-center gap-y-4">
                <button
                  onClick={() => navigate("/sign-up")}
                  className="w-full button"
                >
                  Sign up for free
                </button>
                <button
                  onClick={() => navigate("/sign-in")}
                  className="w-full button-opposite"
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <form
        className={`flex  md:hidden justify-between items-center p-1 my-2 bg-gray-100 shadow-sm rounded-md ${
          location.pathname === "/search" ? "hidden" : "block"
        }`}
      >
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent px-2 py-1 w-3/4 text-black rounded-l-md "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 flex items-center justify-center cursor-pointer"
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
