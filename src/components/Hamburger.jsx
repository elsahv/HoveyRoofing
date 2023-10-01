import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./sidebarData";

const Hamburger = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="dropdown md:hidden block">
      <FaIcons.FaBars className="text-black" onClick={showSidebar} />
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="pl-5 text-2xl" onClick={showSidebar}>
          <div className="pt-5 pb-3 relative top-0 right-0">
            <AiIcons.AiOutlineClose />
          </div>
          {SidebarData.map((item, index) => {
            return (
              <li className="py-2" key={index}>
                <a href={item.path}>
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;
