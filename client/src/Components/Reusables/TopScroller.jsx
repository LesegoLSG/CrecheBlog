import React, { useState, useEffect } from "react";
import { BiSolidArrowToTop } from "react-icons/bi"; // Importing the icon for the "scroll to top" button

const TopScroller = () => {
  // State to control the visibility of the scroll-to-top button
  const [backToTop, setBackToTop] = useState(false);
  // useEffect to monitor the scroll position
  useEffect(() => {
    // Adding a scroll event listener to the window

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true); // Show the button if the scroll position is greater than 100px
      } else {
        setBackToTop(false); // Hide the button if less than 100px
      }
    });
  }, [backToTop]); // Dependency array ensures the listener is set up once and responds to state changes

  // Function to scroll the window back to the top
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to the top
    });
  };
  return (
    <div>
      {/* Conditional rendering of the button */}
      {backToTop && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "5px",
            height: "30px",
            width: "30px",
            fontSize: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "#FF8000",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            zIndex: "9999",
            padding: "5px",
          }}
          onClick={scrollUp}
        >
          <BiSolidArrowToTop size={30} /> {/* Arrow icon from react-icons */}
        </button>
      )}
    </div>
  );
};

export default TopScroller;
