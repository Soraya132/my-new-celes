import { Link } from "react-router-dom";
import "./Request.css";

const Request = () => {
  return (
    <>
      <div className="hero-bg !bg-top py-2 px-4 sm:!px-10 w-screen  ">
        <div className="grid grid-cols-1 lg:grid-cols-6 w-full">
          <div className="color-white flex flex-col gap-2 mt-8 col-span-2">
            <div className="text-4xl sm:text-5xl font-[600]">
              <h1 className="pb-2 border-right blue-color text-center lg:!text-left lg:pt-10">
                U<span className="de">NLEASH</span>
                <span className=" text-white"> THE</span>
              </h1>
            </div>
            <div className="font-[600] text-4xl sm:text-5xl ">
              <h1 className="pb-2 border-right text-white text-center lg:!text-left ">
                FUTURE{" "}
                <span className="text-[#0d6efd]">
                  T<span className="de">ODAY</span>
                </span>
              </h1>
            </div>
            <div>
              <img
                src="/images/accuracy.png"
                className="!flex lg:!hidden mx-auto"
                alt="landing page"
              />
            </div>
            <p className="text-white pb-10 text-center lg:!text-left">
              We build cutting-edge technology that breaks barriers and empowers
              you to achieve the impossible. Explore how our innovative
              solutions can transform your world.
            </p>
            <div className="flex gap-4 flex-col sm:flex-row w-full">
              <Link
                to="/startProject"
                className="px-2 py-3 md:text-sm  bg-blue-700 flex justify-center text-white rounded-3 w-full"
              >
                Start A Project
              </Link>
              <Link
                to="/work"
                className="border-2 flex  md:text-sm  justify-center border-blue-600 px-2 py-3 bg-transparent text-white rounded-3 w-full"
              >
                Our Work
              </Link>
            </div>
          </div>
          <div className=" col-span-3 !hidden lg:!flex">
            <img src="/images/accuracy.png" alt="landing page" />
          </div>
          <div className="flex lg:flex-col items-center pt-5 justify-center lg:justify-start lg:!pt-20 flex-wrap sm:flex-nowrap text-white gap-5 ">
            <div className="flex flex-col justify-center items-center gap-2 opacity-50">
              <img
                src="/social/Frame 93.png"
                alt="reviews"
                className="max-w-[50px] lg:!max-w-[80px] "
              />
              <h2 className="text-sm text-center">trusted clients</h2>
            </div>
            <div className="flex flex-col justify-center  items-center gap-2 opacity-50 ">
              <img
                src="/social/Frame 94.png"
                alt="reviews"
                className="max-w-[50px] lg:!max-w-[80px]"
              />
              <h2 className="text-sm text-center">years of experience</h2>
            </div>
            <div className="flex flex-col overflow-x-hidden">
              <Link to="/about">
                <img src="/social/Reviews.png" alt="reviews" />
              </Link>
              <h2 className="text-center text-sm">1k positive reviews</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Request;
