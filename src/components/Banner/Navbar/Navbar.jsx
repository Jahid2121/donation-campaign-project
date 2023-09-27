import { NavLink } from "react-router-dom";
import image from '../../../assets/Logo.png'
const Navbar = () => {
  return (
    <div className="">
      <nav className="flex flex-col md:flex-row justify-between md:mr-12 mt-14 md:mt-12">
        <img className="w-1/4 md:ml-20 ml-32" src={image} alt="" />
        <ul className="flex ml-9 gap-10 mt-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/donations"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
              }
            >
              Donations
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
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
