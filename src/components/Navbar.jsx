import { NavLink } from "react-router-dom";

import { SIDEBAR_LINKS } from "../constants";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">SV</p>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium">
        {SIDEBAR_LINKS.map((link) => (
          <NavLink
            to={link.route}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
            key={`Link_${link.label}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
