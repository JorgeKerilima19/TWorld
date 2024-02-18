import { Link, NavLink } from "react-router-dom";

import backToTop from "../helpers/backToTop";

import logo from "../assets/images/logo.svg";

const menuItems = [
  { to: "/TWorld/cases", label: "Cases" },
  { to: "/TWorld/services", label: "Services" },
  { to: "/TWorld/about", label: "About us" },
  { to: "/TWorld/careers", label: "Careers" },
  { to: "/TWorld/blog", label: "Blog" },
  { to: "/TWorld/contact", label: "Contact us" },
];

export const Navbar = ({ showNavbar, handleNav }: any) => {
  return (
    <>
      <nav
        className={`max-w-screen-2xl w-full top-0 flex flex-col md:flex-row transform h-full md:h-20 overflow-auto p-2 justify-between gap-4`}
      >
        <NavLink
          onClick={() => {
            backToTop();
            handleNav;
          }}
          to={"/TWorld/"}
          className="flex gap-2 items-center"
        >
          <img src={logo} alt="logo" width={50} />
          <h1
            className={`text-black-50 font-bold text-2xl ${
              showNavbar ? "" : "text-white"
            }`}
          >
            TWorld
          </h1>
        </NavLink>
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-4 md:gap-7 md:pr-4 lg:pr-10 ${
            showNavbar ? "" : "md:hidden"
          } h-3/4 md:h-auto`}
        >
          <ul className="flex flex-col md:flex-row gap-5 lg:gap-10 items-center">
            {menuItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  onClick={() => {
                    backToTop();
                    handleNav();
                  }}
                  className={(classname) =>
                    classname.isActive
                      ? "px-2 border-b-red-700 border-b-2"
                      : "px-2 navItem-hover"
                  }
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/TWorld/contact/">
            <button className="bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent hover border-b-red-700 border-b-2 rounded">
              Chat with Us
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};
