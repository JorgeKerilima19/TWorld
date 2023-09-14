import { CaseCard } from "../components/cases";
import { caseStudies } from "../helpers/data/caseStudies";

export const Cases = () => {
  return (
    <>
      <section className="min-h-vh flex gap-10 items-center">
        <div className="flex flex-col gap-10">
          <h2 className="text-6xl">Case Studies</h2>
          <span className="font-light text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            tempus purus. Morbi semper, augue.
          </span>
        </div>
      </section>
      <div>
        {caseStudies.map((feature, index) => (
          <CaseCard key={index} feature={feature} />
        ))}
      </div>
    </>
  );
};
