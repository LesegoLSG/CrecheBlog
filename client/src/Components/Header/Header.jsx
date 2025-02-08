import React, { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useNavigates } from "../Contexts/NavContext";
import Logo1 from "../../assets/Logos/Logo1.png";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { activeLink } = useNavigates();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [currentUser, setCurrentUser] = useState(true);

  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
              <Link
                to="/"
                className={`${activeLink === "home" ? "text-blue-400" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${activeLink === "about" ? "text-blue-400" : ""}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                className={`${activeLink === "search" ? "text-blue-400" : ""}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                className={`${activeLink === "search" ? "text-blue-400" : ""}`}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                className={`${activeLink === "search" ? "text-blue-400" : ""}`}
              >
                Our Team
              </Link>
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
              <div className="w-12 h-12">
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
                  <ColorMode toggleTheme={toggleTheme} />
                  <hr></hr>
                  {/* Sign out button */}

                  <button className="w-full flex items-center gap-x-2 text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <LiaSignOutAltSolid size={20} />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-x-2">
              <button className="button-alt hidden md:block ">
                <Link to="/sign-up">Sign Up for free</Link>
              </button>
              <button className="button hidden md:block ">
                <Link to="/sign-in">Sign In</Link>
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
            className={`absolute top-12 left-0 w-full shadow-lg flex flex-col items-center md:hidden z-50`}
          >
            <ul className="flex flex-col gap-4 font-semibold py-6">
              <li>
                <Link
                  to="/"
                  className={`${activeLink === "home" ? "underline" : ""}`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`${activeLink === "about" ? "underline" : ""}`}
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className={`${
                    activeLink === "search" ? "text-blue-400" : ""
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className={`${
                    activeLink === "search" ? "text-blue-400" : ""
                  }`}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className={`${
                    activeLink === "search" ? "text-blue-400" : ""
                  }`}
                >
                  Our Team
                </Link>
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
                  className="w-full button-alt"
                >
                  Sign up for free
                </button>
                <button
                  onClick={() => navigate("/sign-in")}
                  className="w-full button"
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
