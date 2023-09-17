import arrow from "/arrowDown.svg";
import { useState } from "react";

const FooterDetailsItems = ({ attribute, value }: any) => {
  const [display, setDisplay] = useState(false);

  const handleExpand = () => {
    setDisplay((display) => !display);
  };

  return (
    <>
      <div
        onClick={handleExpand}
        className="flex gap-1 justify-between self-start"
      >
        <h4 className="font-bold">{attribute}</h4>
        <img src={arrow} alt="arrow" className="w-5" />
      </div>
      <ul
        className={`transition-all duration-300 pl-4 grid gap-2 ${
          display ? "h-full" : "h-0"
        } overflow-hidden`}
      >
        {value.map((el: any) => (
          <li>{el}</li>
        ))}
      </ul>
    </>
  );
};

export default FooterDetailsItems;
