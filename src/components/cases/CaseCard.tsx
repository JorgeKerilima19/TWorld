import { ChildProps } from "../Interfaces";

export const CaseCard = ({ feature }: ChildProps) => {
  return (
    <article
      className={`w-10/12 flex gap-5 flex-col gap-15 tracking-wide leading-relaxed py-5 md:py-10 md:relative ${
        (feature.id ?? 0) % 2 !== 0 ? "md:-translate-y-10" : ""
      }`}
    >
      <img className="w-full h-80 object-cover " src={feature.img} alt="" />
      <span className="font-bold text-red-700">{feature.tag}</span>
      <header className="text-2xl font-semibold">{feature.title}</header>
      <span className="text-lg text-gray-500">{feature.description}</span>
    </article>
  );
};
