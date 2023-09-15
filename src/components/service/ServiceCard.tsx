import { Link } from "react-router-dom";

import { ChildProps } from "../Interfaces";

export const ServiceCard = ({ feature }: ChildProps) => {
  return (
    <article className="w-full sm:w-80 relative flex flex-col items-start gap-5 p-5 rounded-lg md:hover:transform md:hover:translate-y-[-2%] transition duration-300 md:hover:shadow-lg bg-white">
      <img src={feature.img} alt="" />
      <header className="text-2xl font-semibold text-red-700">{feature.title}</header>
      <span className="text-lg font-normal text-gray-600">{feature.description}</span>
      <button className="py-2 px-5 text-xl bg-red-700 hover:bg-black transition duration-300">
        <Link className="text-white" to={""}>
          Learn more
        </Link>
      </button>
    </article>
  );
};
