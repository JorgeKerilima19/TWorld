import { Navbar, Footer } from "../components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="md:min-h-screen px-3 py-0 md:py-20 md:px-10  tracking-wider">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;