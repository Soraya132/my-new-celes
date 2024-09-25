import { Link } from "react-router-dom";

const WorkSolution = () => {
  const servicesData = [
    {
      id: 1,
      title: "SOFTWARE DEVELOPMENT",
      description:
        "Our web development ensures seamless design and functionality across devices, prioritizing user experience.",
    },
  ];

  return (
    <div className="px-4 sm:!px-10 py-5 bg-cover bg-center">
      <div className="flex items-center gap-2 w-100 justify-start ">
        <h2 className="text-3xl font-[600] text-white">Our</h2>
        <h2 className="text-blue-700 text-3xl font-[600]">Services.</h2>
        <div className="w-20 border-b border-white"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 pb-5 w-full">
        <div className="flex flex-col gap-3 lg:col-span-2">
          <h2 className="text-white text-3xl font-semibold mt-20 mb-10 ">
            We craft solutions that drive your success.
          </h2>
          <div className="flex flex-col gap-10">
            {servicesData.map((service, index) => (
              <div key={index} className="">
                <div className="flex items-center md:items-start mb-10 gap-3">
                  <h5 className="text-blue-500 text-2xl font-bold">
                    0{service.id}
                  </h5>
                  <div className="flex flex-col md:flex-row justify-between w-full">
                    <h5 className="text-white text-xl font-semibold">
                      {service.title}
                    </h5>
                    <p className="text-white text-sm md:text-md font-normal max-w-[500px]">
                      {service.description}
                    </p>
                  </div>
                </div>
                <svg className="w-full h-4 flex-1 mr-10 text-white">
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

export default WorkSolution;
