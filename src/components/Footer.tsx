import { Newsletter } from ".";
import logo from "../assets/images/logoWhite.svg";

import youtubeLogo from "/youtube.svg";
import instagramLogo from "/instagram.svg";
import twitterLogo from "/twitter.svg";

const footerElements = [
  {
    title: "Contact",
    items: ["Lima-Peru", "Buenos Aires-Argentina", "Wakanda-Unknown"],
  },
  {
    title: "Call us",
    items: [
      {
        Peru: "+5192245624",
        Argentina: "+08712455224",
        Wakanda: "+00144578",
      },
    ],
  },
  {
    title: "Company",
    items: ["Cases", "Services", "Blog", "Careers", "Contact", "About us"],
  },
];

export const Footer = () => {
  return (
    <footer className="relative w-full bottom-0 pb-10 bg-red-700 text-white">
      <Newsletter />
      <div className="pt-8 md:pt-10 flex flex-col px-7 gap-4">
        <div className="min-w-footerItem flex gap-5">
          <img className="w-8" src={youtubeLogo} alt="youtube" />
          <img className="w-8" src={instagramLogo} alt="instagram" />
          <img className="w-8" src={twitterLogo} alt="twitter" />
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
              <h3 className="text-lg font-semibold ">{el.title}</h3>
              <ul className="grid gap-5">
                {el.items.map((item) => {
                  if (typeof item !== "object") {
                    return <li key={item}>{item}</li>;
                  }
                  return Object.entries(item).map(([key, value], index) => (
                    <div key={index} className="grid gap-2">
                      <span>{key}: </span>
                      <span>{value}</span>
                    </div>
                  ));
                })}
              </ul>
            </div>
          ))}
          <div className="min-w-footerItem flex flex-col gap-5">
            <h3 className="text-lg font-semibold border-b-2 border-b-white">
              Details
            </h3>
            <ul className="grid gap-4">
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Services
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Technologies
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Developers
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Careers
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Cities we are in
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
