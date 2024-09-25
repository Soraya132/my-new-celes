import "../Components/Donate/Donate.css";
import { useState } from "react";
import {
  FaHandHoldingHeart,
  FaDonate,
  FaTshirt,
  FaLaptop,
  FaBus,
  FaGasPump,
  FaChalkboardTeacher,
  FaWineGlassAlt,
} from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi"; // For stationary
import {
  FaPhone,
  FaWhatsapp,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { RiRedPacketLine } from "react-icons/ri";

const Donate = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const ContactInfo = [
    {
      icon: <FaPhone />,
      info: "+254-114395617",
      page: "tel:+254-114395617",
    },
    {
      icon: <FaWhatsapp />,
      info: "+254-727493854  ",
      page: "https://wa.me/254727493854",
    },
    {
      icon: <RiRedPacketLine />,
      info: "ceo@celestialcrafters.co.ke ",
      page: "mailto:ceo@celestialcrafters.co.ke",
    },
  ];

  return (
    <div>
      <section className=" bg text-white flex flex-col gap-10 !rounded-none backdrop-filter min-h-[100vh] backdrop-blur-2xl !py-10  !w-[90%] mx-auto px-3 sm:px-10 my-14 ">
        <article className="grid lg:grid-cols-2 gap-24 justify-between">
          <div className="flex flex-col gap-6">
            <h1 className="font-600 text-5xl">Welcome to Celestial Crafters</h1>
            <div className="bg-[#000033] p-5 ">
              <h2 className="text-[#0337CB] font-600 text-2xl pb-2">
                Our Impact{" "}
              </h2>
              <p>
                Your donation is more than just financial support—it's an
                opportunity to change lives. By empowering women and girls in
                tech, you're breaking barriers and building a future where women
                lead in innovation.
              </p>
            </div>
            <div className="bg-[#000033] p-5 ">
              <h2 className="text-[#0337CB] font-600 text-2xl pb-2">
                Our mission{" "}
              </h2>
              <p>
                We are committed to closing the gender gap in tech. With our
                team from third-world countries, we’re focused on inspiring
                young girls and equipping women to become tech leaders.
              </p>
            </div>
          </div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/donate/children.png`}
              alt="child"
              className="h-full object-cover w-full"
            />
           
          </div>
        </article>
        <article className="bg-[#000033] p-5 sm:p-10 ">
          <div className="flex flex-col gap-4">
            <p className="pb-3">
              Your Donation Makes a Difference:
              <li>
                Inspiring Girls to Explore Tech: Through school visits across
                Kenya, we provide mentorship and essential supplies, igniting a
                passion for technology in young girls.
              </li>{" "}
              <li>
                Building Future Women Leaders: We offer continuous training and
                mentorship to women at Celestial Crafters, helping them stay at
                the cutting edge of tech.{" "}
              </li>
              <li>
                Supporting Young Women in Tech Education: We mentor students in
                tech, providing community, resources, and career-building
                opportunities.{" "}
              </li>
              Together, We Can Achieve More Your contribution directly fuels
              change.
            </p>
            <h3 className="text-[#0337CB] font-600 text-2xl pb-2">
              Help us shape the future of women in tech and create lasting
              impact.
            </h3>
          </div>
        </article>
      </section>
      <div className="flex flex-col items-center justify-center gap-12 py-10">
        <div className="flex justify-center">
          <button
            className="text-white text-sm uppercase font-semibold py-4 px-10 bg-blue-700 rounded-sm flex items-center justify-center gap-1"
            onClick={openModal}
          >
            <img
              src={`${process.env.PUBLIC_URL}/donate/heart.png`}
              alt="heart"
              className="w-7"
            />
            <p>Donate</p>
          </button>

          {modalOpen && (
            <div className="fixed inset-0 bg-[#000033] bg-opacity-1 flex items-center justify-center">
              <div className="payment">
                <p
                  className=""
                  style={{ fontWeight: "bold", fontSize: "32px" }}
                >
                  Payment Options:
                </p>
                <ol>
                  <li className="mb-8">
                    <div style={{ color: "green", fontSize: "24px" }}>
                      <strong>Mpesa</strong>
                    </div>
                    <br />
                    Pay bill Number - <strong>400200 </strong>
                    <br />
                    Account Number - <strong>628497</strong> <br />
                    Business Name -{" "}
                    <span
                      style={{
                        marginTop: "8px",
                        color: "#0D6EFD",
                        fontSize: "18px",
                      }}
                    >
                      Celestial Crafters
                    </span>
                  </li>
                  <li>
                    <div style={{ color: "green", fontSize: "24px" }}>
                      <strong>Bank</strong>
                    </div>
                    <br />
                    <strong>Cooperative Bank </strong>
                    <br />
                    Name -{" "}
                    <span style={{ color: "#0D6EFD" }}>
                      CELESTIAL CRAFTERS{" "}
                    </span>
                    <br />
                    Account Number - <strong>01100707184001</strong>
                  </li>
                </ol>
                <br />

                <button
                  className="mt-4 bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="py-4  rounded-sm bg-blue-700 text-white mx-4  lg:w-auto ">
          <button
            onClick={() => toggleAccordion(0)}
            className="w-full text-left px-5 py-2 flex justify-between items-center focus:outline-none"
          >
            <span className="text-sm uppercase font-semibold pr-2">
              For more ways to give{" "}
            </span>
            <span>
              {openIndex === 0 ? (
                <FaChevronUp className="h-6 w-6 " />
              ) : (
                <FaChevronDown className="h-6 w-6" />
              )}
            </span>
          </button>
          {openIndex === 0 && (
            <div className="px-4 py-2 bg-[#000033]">
              <ol className="flex flex-col gap-2 list-decimal pl-5">
                <li className="flex items-center gap-2">
                  <FaHandHoldingHeart />
                  Donate Sanitary Towels
                </li>
                <li className="flex items-center gap-2">
                  <GiBookshelf />
                  Donate Stationary
                </li>
                <li className="flex items-center gap-2">
                  <FaLaptop />
                  Donate Laptops
                </li>
                <li className="flex items-center gap-2">
                  <FaWineGlassAlt />
                  Donate refreshments
                </li>
                <li className="flex items-center gap-2">
                  <FaTshirt />
                  Donate Celestial Crafters printed T-shirts
                </li>
                <li className="flex items-center gap-2">
                  <FaDonate />
                  Donate Softwares
                </li>
                <li className="flex items-center gap-2">
                  <FaBus />
                  Donate Transportation for movement in schools around Kenya
                </li>
                <li className="flex items-center gap-2">
                  <FaGasPump />
                  Donate Fuel
                </li>
                <li className="flex items-center gap-2">
                  <FaChalkboardTeacher />
                  Volunteer for Mentorship
                </li>
              </ol>

              <h3 className="text-lg mt-2">
                For this type of donations or partnership towards the goal of
                women empowerment contact:{" "}
              </h3>
              <div className="mt-3 ">
                <div className="flex flex-col gap-1 pb-20">
                  {ContactInfo.map((item, index) => {
                    return (
                      <a
                        href={item.page}
                        className="flex gap-4 overflow-x-auto no-scrollbar"
                        target="_blank"
                        rel="noreferrer"
                        key={index + item.info}
                      >
                        <div className="text-blue-700 text-2xl">
                          {item.icon}
                        </div>
                        <span className="text-white group-hover:text-accent duration-500">
                          {item.info}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/serviceIcon/Line%203.png`}
        alt="line"
        className="h-[4px] w-full  md:w-[50%] lg:mt-20 lg:mb-3 md:mt-10 mt-10  mx-auto"
      />
    </div>
  );
};

export default Donate;
