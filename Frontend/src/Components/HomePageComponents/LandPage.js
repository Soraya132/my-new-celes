import Insight from "./Insight/Insight";
const LandPage = () => {
  return (
    <div className="!py-10  px-4 sm:!px-10 ">
      <div className="flex items-center text-white">
        <div className="flex items-center gap-2 w-full pb-5">
          <h2 className=" text-3xl font-[600]">About</h2>
          <h2 className="text-blue-700 text-3xl font-[600]">Us.</h2>
          <div className="w-20 border-b border-white"></div>
        </div>
        <svg className="flex-1 ml-50" width="100%" height="1">
          <line x1="0" y1="0" x2="10%" y2="0" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      <p className="text-left mt-50 text-white">
     With a mission to drive innovation and promote diversity, inclusivity and women's empowerment. We are reshaping the tech landscape. 
      </p>
      <Insight />
    </div>
  );
};

export default LandPage;
