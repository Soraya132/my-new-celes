import { Link } from "react-router-dom";
const AiProjects = () => {
  const softwareDevelopmentProjects = [
    {
      id: 1,
      title: "AI Powered Healthcare Solution",
      category: "Software Development",
      startYear: 2024,
      description:
        "We developed an AI-powered healthcare solution to address the unique challenges faced by healthcare providers in Africa. Leveraging machine learning algorithms, the platform streamlines patient care, improves diagnosis accuracy, and optimizes resource allocation.",
      timeframe: "December 2023 - January 2024",
      url: "/ourWork/work1.jpg",
    },
    {
      id: 2,
      title: "Virtual Assistant Integration",
      category: "Software Development",
      startYear: 2024,
      description:
        "Implemented a virtual assistant integration for a leading e-commerce platform, enhancing customer engagement and streamlining support services. Leveraged natural language processing and machine learning algorithms to develop an intelligent assistant capable of understanding and responding to customer inquiries in real-time.",
      timeframe: "July 2023 - May 2024",
      url: "/ourWork/work2.jpg",
    },
    {
      id: 3,
      title: "Predictive Maintenance System",
      category: "Software Development",
      startYear: 2024,
      description:
        "Developed a predictive maintenance system for a manufacturing company to optimize equipment uptime and reduce operational costs. Utilized sensor data analysis and predictive analytics to forecast equipment failures before they occur, enabling proactive maintenance and minimizing downtime.",
      timeframe: "October 2023 - August 2024",
      url: "/ourWork/work3.jpg",
    },
  ];
  return (
    <div className="px-4 sm:!px-10 py-5 bg-cover bg-center">
      <div className="flex items-center gap-2 w-100 justify-end ">
        <h2 className=" text-3xl font-[600] text-white">Our</h2>
        <h2 className="text-blue-700 text-3xl font-[600]">Work.</h2>
        <div className="w-20 border-b border-white"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3  lg:!gap-x-14 pb-5 w-full">
        <div className="mt-20 lg:col-span-2">
          <div className="w-full h-[300px] ">
            <img
              src={softwareDevelopmentProjects[0].url}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h1 className="text-xl font-bold mt-4 text-white">
            {softwareDevelopmentProjects[0].title}
          </h1>
          <div className="flex items-center justify-between my-2 text-gray-500 pb-3">
            <h5>Category: {softwareDevelopmentProjects[0].category}</h5>
            <h6>{softwareDevelopmentProjects[0].timeframe}</h6>
          </div>
          <p className="text-left text-white mt-1">
            {softwareDevelopmentProjects[0].description}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-white text-3xl font-semibold mt-20 mb-10 ">
            More Projects
          </h2>
          <div className="flex flex-col gap-10">
            {softwareDevelopmentProjects.map((item, index) => (
              <div key={index} className="">
                <h2 className="text-white text-xl font-semibold pb-3">
                  {item.title}
                </h2>
                <div className="flex items-center justify-between">
                  <h5 className=" text-gray-500 text-sm">{item.category}</h5>
                  <h6 className="text-gray-500 text-sm">{item.timeframe}</h6>
                </div>
              </div>
            ))}
          </div>

          <Link to="/services">
            <div className="text-white w-[180px] mt-10 text-sm font-semibold py-3 px-4 bg-blue-700 rounded-md flex items-center gap-1">
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
    </div>
  );
};

export default AiProjects;
