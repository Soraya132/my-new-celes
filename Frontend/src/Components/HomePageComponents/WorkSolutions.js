import { Link } from "react-router-dom";

const WorkSolution = () => {
  const servicesData = [
    {
      id: 1,
      title: "SOFTWARE DEVELOPMENT",
      description:
        "Our web development ensures seamless design and functionality across devices, prioritizing user experience.",
      image: "../images/softwaredev.png",
    },
    {
      id: 2,
      title: "DATA ANALYTICS",
      description:
        "Unlocking Data Insights: Our expertise spans descriptive, diagnostic, and predictive analytics, transforming raw data into actionable insights.",
      image: "./images/dataanalytics.png",
    },
    {
      id: 3,
      title: "PROJECT MANAGEMENT",
      description:
        "Our premier project management service excels in Agile, Scrum, and Waterfall methodologies, guaranteeing timely, budget-conscious, and high-quality project delivery.",
      image: "../images/projectmanagemnet.png",
    },
    {
      id: 4,
      title: "CYBERSECURITY",
      description:
        "With a comprehensive understanding of the latest cyber threats and cutting-edge security technologies, our team is equipped to fortify your digital infrastructure against unauthorized access, data breaches, and other cybersecurity risks.",
      image: "../images/cybersecurity.png",
    },
  ];
  return (
    <div className="px-4 sm:!px-10 py-5 bg-cover bg-center">
      <div className="flex items-center gap-2 w-100 justify-start ">
        <h2 className=" text-3xl font-[600] text-white">Our</h2>
        <h2 className="text-blue-700 text-3xl font-[600]">Services.</h2>
        <div className="w-20 border-b border-white"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3  lg:!gap-x-14 pb-5 w-full ">
        <div className="mt-20 ">
          <div className="w-full h-full ">
            <img
              src="/Assets/service.jpg"
              alt="service"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:col-span-2">
          <h2 className="text-white text-3xl font-semibold mt-20 mb-10 ">
            we craft solutions that drive your success.
          </h2>
          <div className="flex flex-col gap-10">
            {servicesData.map((service, index) => (
              <div key={index} className="">
                <div className="flex items-center md:items-start  mb-10 gap-3">
                  <h5 className=" text-blue-500 text-2xl font-bold">
                    0{service.id}
                  </h5>
                  <div className="flex flex-col md:flex-row md:!justify-between w-full">
                    <h5 className=" text-white text-xl  font-semibold">
                      {service.title}
                    </h5>
                    <p className="text-white text-sm md:text-md  font-normal max-w-[500px]">
                      {service.description}
                    </p>
                  </div>
                </div>
                <svg className="w-full h-4 flex-1 mr-10 text-white ">
                  <line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    className="stroke-current"
                    strokeWidth="0.2"
                  />
                </svg>
              </div>
            ))}
          </div>

          <Link to="/about">
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

export default WorkSolution;
