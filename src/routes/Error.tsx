import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import errorImg from "/error.svg";

export const Error = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row gap-10 items-center justify-center">
      <img
        src={errorImg}
        alt="errorImg"
        className="absolute opacity-5 h-4/5 m-auto pointer-events-none"
      />
      <span className="text-8xl font-light md:py-5 md:pr-10 md:border-r-4 md:border-r-red-700">
        404
      </span>
      <div className="grid gap-9 place-items-center md:place-items-start">
        <div className="max-h-56 flex gap-2 items-center justify-center flex-wrap">
          <img src={logo} alt="logo" className="h-10" />
          <h2 className="text-xl font-bold">Tworld</h2>
        </div>
        <span className="text-3xl font-light text-center">
          Sorry this page is not available
        </span>
        <Link
          className=" bg-red-700 text-white px-8 py-2 text-lg rounded-md  "
          to="/"
        >
          <button>Go back Home</button>
        </Link>
      </div>
    </section>
  );
};
