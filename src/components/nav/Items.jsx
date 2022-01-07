import React from "react";
import './NavBar.scss'
import {Link} from 'react-scroll'

const Items = () => (
  <ul className="Items">
    <Link  to="about" spy={true} smooth={true}>
      <li className="item">About</li>
    </Link>
    <Link  to="purchase" spy={true} smooth={true}>
      <li className="item">Where to purchase</li>
    </Link>
    <Link to="contact" spy={true} smooth={true}>
      <li className="item">Contact Us</li>
    </Link>
  </ul>
);

export default Items;
