import { Newsletter } from ".";
import logo from "../assets/images/logoWhite.svg";

import { Link } from "react-router-dom";

import youtubeLogo from "/youtube.svg";
import instagramLogo from "/instagram.svg";
import twitterLogo from "/twitter.svg";
import FooterDetailsItems from "./FooterDetailsItems";

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

const detailsElements = {
  Title: "Details",
  Items: {
    Technologies: ["JavaScript", "Node Js", "TypeScript", "React js", "Vue js"],
    Developers: [
      "Web developer",
      "Design developers",
      "React Developer",
      "Web app developer",
      "Data analyst",
    ],
    Careers: ["Hiring", "About Us"],
    Cities: ["Lima", "Buenos Aires", "London"],
  },
};

export const Footer = () => {
  return (
    <footer className="relative w-full bottom-0 pb-10 bg-red-700 text-white">
      <Newsletter />
      <div className="pt-8 md:pt-10 flex flex-col px-4 gap-4">
        <div className="min-w-footerItem flex gap-5">
          <img className="w-8 filter-white" src={youtubeLogo} alt="youtube" />
          <img
            className="w-8 filter-white"
            src={instagramLogo}
            alt="instagram"
          />
          <img className="w-8 filter-white" src={twitterLogo} alt="twitter" />
        </div>
        <div className="flex justify-between border-b-2 border-b-white pb-4">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="logo" width={50} />
            <h1 className={`text-black-50 font-bold text-2xl text-white`}>
              TWorld
            </h1>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap justify-between w-full">
          {footerElements.map((el, index) => (
            <div
              key={index}
              className="gap-5 grid place-content-start min-w-footerItem"
            >
              <h3 className="text-lg font-semibold">{el.title}</h3>
              <ul className="grid gap-5">
                {Array.isArray(el.items) ? (
                  <>
                    {el.items.map((item, index) => {
                      if (el.title === "Company") {
                        return (
                          <Link
                            key={index}
                            to=""
                            className="hover:after:w-5/6 relative after:-bottom-1 after:left-0 after:content[''] after:h-[2px] after:0 after:absolute after:bg-white"
                          >
                            {item}
                          </Link>
                        );
                      }

                      return (
                        <li key={index} className="">
                          {item}
                        </li>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {Object.entries(el.items).map(([key, value], index) => (
                      <li key={index}>
                        <span>{key} :</span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
          ))}
          <div className="grid gap-3 min-w-footerItem place-content-start">
            <h3 className="text-lg font-semibold">{detailsElements.Title}</h3>
            {Object.entries(detailsElements.Items).map(
              ([key, value], index) => (
                <ul key={index} className="grid gap-1">
                  <FooterDetailsItems attribute={key} value={value} />
                </ul>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
