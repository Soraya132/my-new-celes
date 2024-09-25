import { useState, useEffect } from "react";
import Modal from "../Components/common/Modal";
import { Link } from "react-router-dom";
import Hero from "../Components/common/Hero";
import ContactForm from "../Components/common/Form/contactForm";

const softwareDevelopmentProjects = [
  {
    id: 1,
    title: "AI Powered Healthcare Solution",
    category: "Software Development",
    description:
      "We developed an AI-powered healthcare solution to address the unique challenges faced by healthcare providers in Africa. Leveraging machine learning algorithms, the platform streamlines patient care, improves diagnosis accuracy, and optimizes resource allocation.",
    url: `${process.env.PUBLIC_URL}/ourWork/work1.jpg`,
  },
  {
    id: 2,
    title: "Virtual Assistant Integration",
    category: "Software Development",
    description:
      "Implemented a virtual assistant integration for a leading e-commerce platform, enhancing customer engagement and streamlining support services. Leveraged natural language processing and machine learning algorithms to develop an intelligent assistant capable of understanding and responding to customer inquiries in real-time.",
    url: `${process.env.PUBLIC_URL}/ourWork/work2.jpg`,
  },
  {
    id: 3,
    title: "Predictive Maintenance System",
    category: "Software Development",
    description:
      "Developed a predictive maintenance system for a manufacturing company to optimize equipment uptime and reduce operational costs. Utilized sensor data analysis and predictive analytics to forecast equipment failures before they occur, enabling proactive maintenance and minimizing downtime.",
    url: `${process.env.PUBLIC_URL}/ourWork/work3.jpg`,
  },
  {
    id: 4,
    title: "Social Media App",
    category: "Mobile Development",
    description:
      "Developed a social media app with real-time messaging and post sharing features.",
    url: `${process.env.PUBLIC_URL}/ourWork/social.jpg`,
  },
  {
    id: 5,
    title: "Finance Management System",
    category: "Software Development",
    description:
      "Built a comprehensive finance management system for tracking expenses and budgeting.",
    url: `${process.env.PUBLIC_URL}/ourWork/dataanalyshero.jpg`,
  },
  {
    id: 6,
    title: "AI Chatbot",
    category: "Artificial Intelligence",
    description:
      "Implemented an AI-powered chatbot for customer support and assistance.",
    url: `${process.env.PUBLIC_URL}/ourWork/machine.jpg`,
  },
];

const OurWork = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [tempCategoryFilter, setTempCategoryFilter] = useState("");
  const [filterType, setFilterType] = useState("category"); // Default filter type
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const categories = [
    ...new Set(softwareDevelopmentProjects.map((project) => project.category)),
  ];

  const filteredProjects = softwareDevelopmentProjects.filter((project) => {
    return !categoryFilter || project.category === categoryFilter;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProjects.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (pageNumber === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Scroll to top when currentPage changes
  useEffect(() => {
    window.scrollTo({ top: 200, behavior: "smooth" });
  }, [currentPage]);

  const handleResetFilters = () => {
    setCategoryFilter("");
    setCurrentPage(1);
    setShowProfile(false);
  };

  const handleApplyFilters = () => {
    setCategoryFilter(tempCategoryFilter);
    setCurrentPage(1);
    setShowProfile(false);
  };

  return (
    <div className="bg-[#000] text-white">
      <Hero />
      <section className="flex justify-between gap-1 w-full items-center px-4 sm:!px-10 pb-2">
        <p className="capitalize text-gray-300 text-sm sm:text-md w-full flex-1">
          Explore our work from talented women across Africa
        </p>
        <button
          className="flex gap-2 px-3 sm:flex-[0.2] py-2 bg-transparent border-[2px] items-center !border-blue-700 justify-center text-white rounded-lg"
          onClick={() => setShowProfile(!showProfile)}
        >
          <p>Filter</p>
          <img
            src={`${process.env.PUBLIC_URL}/Assets/icons/filter.png`}
            alt="filter icon"
          />
        </button>
      </section>
      <section className="relative">
        <Modal setShowModal={setShowProfile} showModal={showProfile}>
          <section className="flex gap-3 ml-2 mr-4 sm:mr-10 bg-[#0B0B0B] rounded-lg ">
            <div className="flex flex-col px-2 sm:px-3 py-4 gap-3 border-r border-r-blue-700">
              <div>
                <button
                  className="text-gray-300"
                  onClick={() => setFilterType("category")}
                >
                  Category
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-[90px] px-1 py-3 sm:p-3">
              <div>
                {filterType === "category" && (
                  <div>
                    {categories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center text-gray-300"
                      >
                        <input
                          type="checkbox"
                          value={category}
                          checked={tempCategoryFilter === category}
                          onChange={(e) =>
                            setTempCategoryFilter(
                              e.target.checked ? e.target.value : ""
                            )
                          }
                          className="mr-2"
                        />
                        {category}
                      </label>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex flex-wrap justify-between gap-3">
                <button
                  className="text-white my-1 w-full sm:w-auto text-sm py-[10px] px-7 bg-blue-700 rounded-md flex justify-center"
                  onClick={handleResetFilters}
                >
                  Cancel
                </button>
                <button
                  className="text-white my-1 w-full sm:w-auto text-sm py-[10px] px-7 bg-blue-700 rounded-md flex justify-center"
                  onClick={handleApplyFilters}
                >
                  Apply
                </button>
              </div>
            </div>
          </section>
        </Modal>
      </section>
      <section className="flex flex-col gap-10 px-4 sm:!px-10">
        <div className="flex text-4xl">
          <h2 className="pb-2 border-right">Latest</h2>
          <h2 className="text-[0FD0F9] ml-3">
            <span className="de">work.</span>
          </h2>
        </div>
        {currentItems.length === 0 && (
          <h2 className="text-xl text-gray-300 mt-6 text-center">
            No matching projects found.
          </h2>
        )}
        {currentItems.map((item) => (
          <div key={item.id}>
            <div
              className={`flex text-4xl pb-4 ${item.id === 2 ? "" : "hidden"}`}
            >
              <h2 className="pb-2 border-right">Past</h2>
              <h2 className="text-[0FD0F9] ml-3">
                <span className="de">work.</span>
              </h2>
            </div>
            <div className="h-full grid lg:grid-cols-2 gap-10 lg:gap-14">
              <div>
                <img
                  src={item.url}
                  alt="our work"
                  className="h-full w-full rounded-[30px] lg:h-[330px] object-cover"
                />
              </div>
              <div className="flex flex-col justify-between gap-3">
                <div>
                  <h2 className="text-xl">{item.title}</h2>
                  <div className="flex items-center justify-between gap-1 pt-2">
                    <h5 className="text-[13px] sm:text-sm">
                      Category : {item.category}
                    </h5>
                    {/* Removed timeframe */}
                  </div>
                </div>
                <p className="text-md">{item.description}</p>
                <Link to="/about">
                  <button className="text-white w-[180px] my-1 text-sm font-semibold py-3 px-4 bg-blue-700 rounded-md flex justify-center">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className="flex justify-end mt-4 px-4 sm:px-10 w-full">
        <button
          className={`text-white text-sm font-semibold py-3 w-[150px] bg-blue-700 rounded-md mr-2 ${
            currentPage === 1 ? "hidden" : ""
          }`}
          onClick={() => paginate("prev")}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`${
            currentPage === totalPages ? "hidden" : ""
          } text-white text-sm font-semibold py-3 w-[150px] bg-blue-700 rounded-md`}
          onClick={() => paginate("next")}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <ContactForm />
    </div>
  );
};

export default OurWork;
