import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

export default function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="bg-white max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className=" bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="bg-white w-20 mt-[-3rem] mx-auto"
            src={single}
            alt="/"
          />
          <h2 className="bg-white text-2xl font-bold text-center py-8">
            Single User
          </h2>
          <p className="bg-white text-center text-4xl font-bold">$145</p>
          <div className="bg-white text-center font-medium">
            <p className="bg-white py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="bg-white py-2 border-b mx-8">1 Granted User</p>
            <p className="bg-white py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="text-black bg-[#00df9a] w-[200px] my-6 mx-auto px-6 py-3 rounded-md font-medium ">
            Start Trial
          </button>
        </div>
        <div className=" bg-[#e3e0e0] w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img
            className="bg-transparent w-20 mt-[-3rem] mx-auto"
            src={double}
            alt="/"
          />
          <h2 className="bg-[#e3e0e0] text-2xl font-bold text-center py-8">
            Single User
          </h2>
          <p className="bg-[#e3e0e0] text-center text-4xl font-bold">$145</p>
          <div className="bg-[#e3e0e0] text-center font-medium">
            <p className="bg-[#e3e0e0] py-2 border-b mx-8 mt-8">
              500 GB Storage
            </p>
            <p className="bg-[#e3e0e0] py-2 border-b mx-8">1 Granted User</p>
            <p className="bg-[#e3e0e0] py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="text-[#00df9a] bg-black w-[200px] my-6 mx-auto px-6 py-3 rounded-md font-medium ">
            Start Trial
          </button>
        </div>
        <div className=" bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="bg-white w-20 mt-[-3rem] mx-auto"
            src={triple}
            alt="/"
          />
          <h2 className="bg-white text-2xl font-bold text-center py-8">
            Single User
          </h2>
          <p className="bg-white text-center text-4xl font-bold">$145</p>
          <div className="bg-white text-center font-medium">
            <p className="bg-white py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="bg-white py-2 border-b mx-8">1 Granted User</p>
            <p className="bg-white py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="text-black bg-[#00df9a] w-[200px] my-6 mx-auto px-6 py-3 rounded-md font-medium ">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}
