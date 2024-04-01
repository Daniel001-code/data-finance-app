import Laptop from "../assets/laptop.jpg";
export default function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="bg-white max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className=" w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="bg-white flex flex-col justify-center ">
          <p className="text-[#00df9a] font-bold bg-white">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="bg-white md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="bg-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            eius nihil accusantium adipisci, sint officia? Porro sunt quo
            obcaecati? Sapiente exercitationem a alias repellendus repudiandae
            cupiditate. Dolor consequuntur natus excepturi.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md mx-auto py-3 font-bold md:mx-0 my-[30px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
