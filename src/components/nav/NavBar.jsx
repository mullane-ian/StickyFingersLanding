import React from "react";
import Items from "./Items";
import { useSpring, animated } from "react-spring";
import './NavBar.scss'


const NavBar = ({ show }) => {
  const { left } = useSpring({
    from: { left: "-100%" },
    left: show ? "0" : "-100%"
  });
  return (
    <animated.div style={{ left: left }} className="Sidebar">
      <Items />
    </animated.div>
  );
};

export default NavBar;
