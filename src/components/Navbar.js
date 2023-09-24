import React from "react";
import { FaApple } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <ul class="font-medium flex flex-col ">
        <li>
          <FaApple />
          <a href="#">Home</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
