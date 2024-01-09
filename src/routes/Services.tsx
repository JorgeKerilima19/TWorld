import img from "/featuresSVG/JsFeature1.svg";
import { ServiceCard } from "../components/service";
import { Clients, Invitation, Technologies } from "../components";

const services = [
  {
    title: "Software Development",
    chars: [
      {
        title: "Feature 1",
        img: img,
        description:
          "Praesent fermentum bibendum nibh vitae dictum. Nam aliquam ultricies interdum. Fusce dictum diam nec ante elementum, a pretium magna congue.",
      },
      {
        title: "Feature 2",
        img: img,
        description:
          "Praesent fermentum bibendum nibh vitae dictum. Nam aliquam ultricies interdum. Fusce dictum diam nec ante elementum, a pretium magna congue.",
      },
      {
        title: "Feature 2",
        img: img,
        description:
          "Praesent fermentum bibendum nibh vitae dictum. Nam aliquam ultricies interdum. Fusce dictum diam nec ante elementum, a pretium magna congue.",
      },
    ],
  },
  {
    title: "Design Services",
    chars: [
      {
        title: "Feature 1",
        img: img,
        description:
          "Praesent fermentum bibendum nibh vitae dictum. Nam aliquam ultricies interdum. Fusce dictum diam nec ante elementum, a pretium magna congue.",
      },
      {
        title: "Feature 2",
        img: img,
        description:
          "Praesent fermentum bibendum nibh vitae dictum. Nam aliquam ultricies interdum. Fusce dictum diam nec ante elementum, a pretium magna congue.",
      },
      {
        title: "Feature 2",
        img: img,
        description:
          "Praesent fermentum bibendum nibh vitae dictum. Nam aliquam ultricies interdum. Fusce dictum diam nec ante elementum, a pretium magna congue.",
      },
    ],
  },
];

export const Services = () => {
  return (
    <section>
      <div className="relative min-h-screen md:min-h-vh flex gap-10 items-center justify-center flex-col md:flex-row">
        <div className="flex flex-col gap-10 items-center pt-10 md:pt-0 md:items-start">
          <h2 className="text-6xl text-center md:text-left">Our Services</h2>
          <span className="font-light text-lg text-center sm:text-left pl-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            tempus purus. Morbi semper, augue.
          </span>
        </div>
        <img src={img} alt="" />
        <Technologies />
      </div>
      <div className="grid gap-y-20 w-full">
        {services.map((el, index) => (
          <article
            key={index}
            className={`md:pl-10 py-16 grid gap-y-20 ${
              index % 2 === 0 ? "bg-gray-100" : ""
            }`}
          >
            <header className="pl-10 md:pl-0 text-4xl font-semibold">
              {el.title}
            </header>
            <div className="w-full flex gap-10 flex-wrap">
              {el.chars.map((char, index) => (
                <ServiceCard key={index} feature={char} />
              ))}
            </div>
          </article>
        ))}
      </div>
      <Clients />
      <Invitation />
    </section>
  );
};
