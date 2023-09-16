import arrow from "/arrowDown.svg";
import { useState, useEffect } from "react";

const footerElements: {
  title: string;
  items: string[] | Object;
}[] = [
  {
    title: "Contact",
    items: ["Lima-Peru", "Buenos Aires-Argentina", "Wakanda-Unknown"],
  },
  {
    title: "Call us",
    items: {
      Peru: "+5192245624",
      Argentina: "+08712455224",
      Wakanda: "+00144578",
    },
  },
  {
    title: "Company",
    items: ["Cases", "Services", "Blog", "Careers", "Contact", "About us"],
  },
];

const FooterItems = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div className="flex gap-10">
      {footerElements.map((item, index) => (
        <div key={index}>
          <div>
            <h3>{item.title}</h3>
            <img className="w-14" src={arrow} alt="arrow" />
          </div>
          <ul className="grid gap-2">
            {Array.isArray(item.items)
              ? item.items.map((el, index) => <span key={index}>{el}</span>)
              : Object.entries(item.items).map(([key, value]) => (
                  <div>
                    <span>{key}:</span>
                    <span>{value}</span>
                  </div>
                ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterItems;
