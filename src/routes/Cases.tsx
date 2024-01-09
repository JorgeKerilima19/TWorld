import { Invitation, Technologies } from "../components";
import { CaseCard } from "../components/cases";
import { caseStudies } from "../helpers/data/caseStudies";

import img from "../assets/images/banner.jpg";

export const Cases = () => {
  return (
    <>
      <section className="relative min-h-screen md:min-h-vh flex gap-10 items-center">
        <div className="banner absolute w-full h-full -z-10">
          <img
            className="w-full h-full object-cover absolute"
            src={img}
            alt="banner"
          />
        </div>
        <div className="flex flex-col gap-10 px-5">
          <h2 className="text-6xl">Case Studies</h2>
          <span className="font-light text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            tempus purus. Morbi semper, augue.
          </span>
          <Technologies />
        </div>
      </section>
      <div className="grid md:grid-cols-2 place-items-center pt-16">
        {caseStudies.map((feature, index) => (
          <CaseCard key={index} feature={feature} />
        ))}
      </div>
      <Invitation />
    </>
  );
};
