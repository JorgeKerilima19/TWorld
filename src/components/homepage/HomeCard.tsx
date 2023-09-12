import { ChildProps } from "../Interfaces";

export const HomeCard = ({feature}: ChildProps) => {
  return (
    <article className="w-full sm:w-80 bg-gray-200 relative flex flex-col items-start gap-5 p-5 rounded-lg hover:transform hover:translate-y-[-2%] transition duration-300 ">
      <img src={feature.img} alt="" />
      <header className="text-2xl font-semibold">{feature.title}</header>
      <span className="text-lg font-normal">{feature.description}</span>
    </article>
  );
};
