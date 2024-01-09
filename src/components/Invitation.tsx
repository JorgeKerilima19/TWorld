import { Link } from "react-router-dom";
import backToTop from "../helpers/backToTop";

export const Invitation = () => {
  return (
    <div className="text-4xl py-20 font-normal">
      <h3 className="tracking-wide md:tracking-wider pl-5">
        Let's built something together. Best journeys start with{" "}
        <span>
          <Link
            className="text-red-700 underline underline-offset-8"
            to={"/contact"}
            onClick={backToTop}
          >
            saying hi
          </Link>
        </span>
      </h3>
    </div>
  );
};
