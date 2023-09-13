import { Link } from "react-router-dom";

export const Invitation = () => {
  return (
    <div className="text-4xl py-20 font-normal">
      <h3 className="tracking-wide   md:tracking-wider">
        Let's built something together. Best journeys start with{" "}
        <span>
          <Link className="text-red-700 underline underline-offset-8" to={"/"}>
            saying hi
          </Link>
        </span>
      </h3>
    </div>
  );
};
