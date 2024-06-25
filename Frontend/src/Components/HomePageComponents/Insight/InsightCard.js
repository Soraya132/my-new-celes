import { Link } from "react-router-dom";
const InsightCard = ({ id, imgUrl, title, text, active, handleClick }) => (
  <div
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10] " : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[10px]"
    />
    {active !== id ? (
      <div className="absolute bottom-0 top-0 flex justify-center items-center w-full h-full  bg-[rgba(0,0,0,0.5)]">
        <h3 className="font-semibold sm:text-[26px] text-[18px]  text-white absolute z-0  lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      </div>
    ) : (
      <div className="absolute bottom-0 top-0 py-6 px-3 gap-2 lg:!p-12 flex flex-col w-full h-full bg-[rgba(0,0,0,0.5)]">
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
        <p className="text-white py-3 pb-3 md:w-[80%] lg:w-[70%]">{text}</p>
        <div>
        <Link to="/about">
            <div className="text-white w-[160px] text-sm font-semibold py-3 px-4 bg-blue-700 rounded-md flex items-center gap-1">
              <span>View more</span>
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-1"
              >
                <path
                  d="M13.5 7.5l-4-4m4 4l-4 4m4-4H1"
                  stroke="currentColor"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    )}
  </div>
);

export default InsightCard;
