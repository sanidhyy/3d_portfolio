import { NavLink } from "react-router-dom";

import { EXTRA_LINKS, SIDEBAR_LINKS, SITE_NAME } from "../constants";
import { github } from "../assets/icons";

// navbar
const Navbar = () => {
  return (
    <header className="header">
      {/* brand logo */}
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
        title={SITE_NAME}
      >
        <p className="blue-gradient_text">
          {SITE_NAME.split(" ")[0][0] + "" + SITE_NAME.split(" ")[1][0]}
        </p>
      </NavLink>

      {/* nav links */}
      <nav className="flex text-lg gap-7 font-medium items-center justify-center">
        {SIDEBAR_LINKS.map((link) => (
          // each nav link
          <NavLink
            to={link.route}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
            title={link.label}
            key={`Link_${link.label}`}
          >
            {link.label}
          </NavLink>
        ))}

        {/* github source code */}
        <NavLink
          to={EXTRA_LINKS.source_code}
          target="_blank"
          rel="noreferrer noopener"
          title="Source Code"
        >
          <img src={github} alt="Github" className="w-5 h-5 object-contain" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
