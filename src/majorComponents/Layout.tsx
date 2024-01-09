import { Navbar, Footer } from "../components";
import { Outlet } from "react-router-dom";

import { useState, useEffect } from "react";
export const Layout = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const [showSmallMenu, setShowSmallMenu] = useState(true);

  const handleSmallMenuDisplay = () => {
    if (window.innerWidth > 768) {
      setShowSmallMenu(true);
    } else {
      setShowSmallMenu((showSmallMenu) => !showSmallMenu);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setPrevScrollY(currentScrollY);
    };

    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 768) {
        setShowSmallMenu(true);
      } else {
        setShowSmallMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <>
      <header
        className={`w-full z-10 shadow-sm flex items-center justify-center shadow-red-700 fixed bg-white h-full md:h-20 ${
          showSmallMenu
            ? "md:-translate-x-0 active"
            : "transform -translate-x-[100%]"
        } ${
          !showNavbar
            ? "md:-translate-x-0 md:-translate-y-16 md:border-b-red-700 border-b-2 md:bg-red-700"
            : "bg-white "
        } transition-transform duration-1000 ease-in-out`}
      >
        <Navbar showNavbar={showNavbar} handleNav={handleSmallMenuDisplay} />
      </header>
      <main className="md:min-h-screen py-0 md:py-20 md:px-10 tracking-wider max-w-screen-2xl m-auto">
        <Outlet />
      </main>
      <Footer />
      <div
        className={`${
          showSmallMenu ? "active" : ""
        } hamburger-menu bg-white border-red-700 border-2 rounded-full place-items-center fixed bottom-4`}
        onClick={handleSmallMenuDisplay}
      >
        <span
          className={`${
            showSmallMenu ? "active" : ""
          } hamburger__bar bg-red-700`}
        ></span>
        <span
          className={`${
            showSmallMenu ? "active" : ""
          } hamburger__bar bg-red-700`}
        ></span>
        <span
          className={`${
            showSmallMenu ? "active" : ""
          } hamburger__bar bg-red-700`}
        ></span>
      </div>
    </>
  );
};
export default Layout;
