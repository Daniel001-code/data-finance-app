import { ReactTyped } from "react-typed";
export default function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
          Grow with data.
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl font-bold py-4">
            Fast, Flexible financing for
            <ReactTyped
              className="md:text-5xl sm:text-4xl font-bold md:pl-4 pl-[5px] "
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platform.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto py-3 text-black font-bold my-[30px]">
          Get Started
        </button>
      </div>
    </div>
  );
}
