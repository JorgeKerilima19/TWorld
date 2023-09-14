import date from "/date.svg";
import handStop from "/handStop.svg";

export const Newsletter = () => {
  return (
    <div className="static flex flex-col md:flex-row items-center justify-center gap-10 bg-gradient-newsletter border-2 border-red-700 text-black p-5 pt-10 min-w-full">
      <div className="grid gap-5 max-w-xl tracking-wider">
        <h3 className="text-3xl tracking-wider text-red-700 font-semibold">
          Subscribe to our newsletter
        </h3>
        <span className="text-lg text-gray-600">
          Get notified when for updates and launching. Don't miss the
          opportunity to learn from the best
        </span>
        <form className="flex gap-5 md:gap-10 w-full justify-between">
          <input
            type="text"
            id="email"
            name="email"
            className="w-3/5 border-2 pl-2 focus:border-red-700 focus:outline-none"
          />
          <button
            className="bg-red-700 text-white py-2 px-4 hover:text-red-700 text-lg hover:bg-white transition duration-200 border-2 rounded-md border-transparent md:border-white font-semibold hover:border-red-700"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="flex gap-10 md:gap-5 md:self-end">
        <div className="grid gap-2 max-w-footerItem bg-white p-5 rounded-xl text-black tracking-wider">
          <img className="w-1/5" src={date} alt="" />
          <h4 className="text-lg font-semibold">No Span</h4>
          <span>News blog posts every week</span>
        </div>
        <div className="grid gap-2 max-w-footerItem bg-white p-5 rounded-xl text-black tracking-wider">
          <img className="w-1/5" src={handStop} alt="" />
          <h4 className="text-lg font-semibold">No Span</h4>
          <span>The subscription will only use for the listed purposes</span>
        </div>
      </div>
    </div>
  );
};
