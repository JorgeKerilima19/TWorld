import logo1 from "/google.svg";
import logo2 from "/toggle.svg";

export const Clients = () => {
  return (
    <section className="pl-5 md:pl-10 text-xl py-20 flex flex-col gap-8 bg-gray-100">
      <h3 className="text-4xl font-semibold tracking-wider">Clients who trust us</h3>
      <span className="w-full tracking-wider md:max-w-xl text-lg font-light text-gray-500">
        Along our journey we have constructed strong and trusted connection,
        these are some companies we have worked with
      </span>
      <div className="flex justify-center gap-12 flex-wrap">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
      </div>
    </section>
  );
};
