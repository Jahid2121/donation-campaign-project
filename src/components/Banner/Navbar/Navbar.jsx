import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between">
        <img className="w-1/4" src="/public/Logo.png" alt="" />
        <ul className="flex gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/donations"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Donations
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Statistics
            </NavLink>
            
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
