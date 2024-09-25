import TestimonialSwiper from "./TestimonialSwiper";

const OurTestimonials = () => {
  return (
    <div className="mt-20 px-4 sm:!px-10">
      <div className="flex items-center gap-2 w-100 justify-end pb-10 ">
        <h2 className=" text-3xl font-[600] text-white">Our</h2>
        <h2 className="text-blue-700 text-3xl font-[600]">Work.</h2>
        <div className="w-20 border-b border-white"></div>
      </div>
      <div className="relative z-20 flex flex-col lg:flex-row gap-8 justify-center items-center ">
        <div>
          <h1 className="font-[600] text-5xl text-white text-center lg:!text-left">
            What Are Our Clients <span className="text-blue-700"> Saying?</span>
          </h1>
        </div>
        <div className=" w-[80%] lg:w-[50%] xl:w-[60%] relative xl:!mx-6 mx-auto ">
          <TestimonialSwiper />
        </div>
      </div>
    </div>
  );
};
export default OurTestimonials;
