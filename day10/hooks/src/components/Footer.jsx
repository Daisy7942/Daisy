import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const handleClick = () => {
    setIsDark(!isDark);
  };
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    >
      <button className="button" onClick={() => setIsDark(!isDark)}>
        click me!!
      </button>
    </footer>
  );
};

export default Footer;
