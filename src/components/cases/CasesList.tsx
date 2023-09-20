import { CaseCard } from ".";

import { caseStudies } from "../../helpers/data/caseStudies";

import Carousel from "@itseasy21/react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 800, itemsToShow: 2, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 3 },
];

export const CasesList = () => {
  return (
    <Carousel
      className="w-full"
      isRTL={false}
      breakPoints={breakPoints}
      itemPadding={[0, 10]}
    >
      {caseStudies.map((feature, index) => (
        <CaseCard key={index} feature={feature} />
      ))}
    </Carousel>
  );
};
