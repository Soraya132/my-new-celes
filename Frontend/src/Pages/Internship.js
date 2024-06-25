import { Link } from "react-router-dom";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { RiRedPacketLine } from "react-icons/ri";

const Internship = () => {

  const servicesData1 = [
    {
      id: 1,
      title: "SOFTWARE DEVELOPMENT",
    },
    {
      id: 2,
      title: "DATA ANALYTICS",
    },
    {
      id: 3,
      title: "APP DEVELOPMENT",
    },
    {
      id: 4,
      title: "CYBERSECURITY",
    },
    {
      id: 5,
      title: "UIUX DESIGN",
    },
    {
      id: 6,
      title: "DIGITAL MARKETING",
    },
  ];
  const servicesData2 = [
    {
      id: 8,
      title: "SOCIAL MEDIA MANAGEMENT",
    },
    {
      id: 9,
      title: "GRAPHICS AND DESIGN",
    },
    {
      id: 10,
      title: "FINANCE AND ACCOUNTING",
    },
    {
      id: 11,
      title: "HUMAN RESOURCE MANAGEMENT",
    },
  ];
  const reasons = [
    {
      id: 1,
      title:
        "6 Weeks Self-Paced Internship with 8 hours live mentorship session with Celestial Crafters experts.",
    },
    {
      id: 2,
      title: "Gain practical experience in your field.",
    },
    {
      id: 3,
      title: "Work with experienced mentors.",
    },
    {
      id: 4,
      title: "Network with professionals and peers.",
    },
  ];
  const guests = [
    {
      id: 1,
      img: "/ourWork/Florent.jpeg",
      name: "Florent Nduwayezu",
      job: " Investments | Private Equity & Venture Capital | Africa",
    },
    {
      id: 2,
      img: "/ourWork/Matt.jpg",
      name: "Matt Magera",
      job: "Co-Creator Talent",
    },
    {
      id: 3,
      img: "/Assets/BigImages/Aenia.jpeg",
      name: "Aenia Amin",
      job: "Data Analytics Expert | Software Engineer | Lead Internship Manager at Celestial Crafters.",
    },
    {
      id: 4,
      img: "/Assets/BigImages/avatar1.png",
      name: "Serah Kamau",
      job: "Founder and CEO Celestial Crafters | Software Engineer | Automotive Engineer",
    },
  ];
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
      info: "internships@celestialcrafters.co.ke OR info@celestialcrafters.co.ke ",
      page: "mailto:info@celestialcrafters.co.ke",
    },
  ];
  return (
    <section>
      <article>
        <section
          className=" min-h-300px bg-center bg-cover w-full h-full md:bg-norepeamd:t"
          style={{ backgroundImage: "url('Assets/workimage.jpg')" }}
        >
          <div className="px-4 sm:!px-10 py-10 text-white flex justify-center">
            <h2 className="pb-2 !text-3xl text-center uppercase">
              A Summer Internship Program For All
            </h2>
          </div>
        </section>
        <section className="text-white px-4 sm:!px-10 md:!px-16 py-20">
          <h2 className="underline text-2xl pb-3">
            {" "}
            Welcome to Celestial Crafters Internship Program!
          </h2>
          <p>
            Ever wanted to get started on your entrepreneurial journey and don't
            know how to? Don't worry we got your back we have invited guest
            starting from founders, investors and other Industry professionals
            apply now and get an exclusive one on one Q&A Live session with this
            professionals. Are you ready to kickstart your career with hands-on
            experience and professional development. Join us and be a part of a
            dynamic team that's shaping the future. Our projects are beginner
            friendly to Expert based.
          </p>
          <div className="mt-20">
            <h3 className="uppercase text-2xl">
              Our programmes include
              <span className="text-blue-800 text-2xl font-bold">:</span>
            </h3>
            <div className="mt-10  flex justify-between flex-wrap lg:w-[80%]">
              <div>
                {servicesData1.map((service) => {
                  return (
                    <div key={service.id + "services"} className="pb-3">
                      <span className="text-blue-800 px-4 text-3xl mb-3 font-bold">
                        {service.id}
                      </span>
                      {service.title}
                    </div>
                  );
                })}
              </div>
              <div>
                {" "}
                {servicesData2.map((service) => {
                  return (
                    <div key={service.id + "services"} className="pb-3">
                      <span className="text-blue-800 px-4 text-3xl font-bold">
                        {service.id}
                      </span>
                      {service.title}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h3 className="uppercase text-2xl">WHAT DOES $30 GET YOU?</h3>
            <div className="mt-10  flex justify-between flex-wrap">
              <div>
                {reasons.map((service) => {
                  return (
                    <div key={service.id + "services"} className="pb-3">
                      <span className="px-2">{service.id}.</span>
                      {service.title}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h3 className="uppercase text-2xl">OUR GUEST SPEAKERS</h3>
            <div className="mt-10 ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
                {guests.map((guest) => {
                  return (
                    <div
                      key={guest.id + "guests"}
                      className="pb-3 flex flex-col items-center"
                    >
                      <img
                        src={guest.img}
                        alt="img"
                        className="w-[280px] h-[250px] object-cover rounded-[15px] rounded-b-none pb-3"
                      />
                      <h1 className="text-blue-800 mb-2 font-[600]">{guest.name}</h1>
                      <p> {guest.job}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center py-10">
            <Link to="/internshipForm">
            <button className="text-white text-sm uppercase font-semibold py-4 px-10 bg-blue-700 rounded-lg flex items-center justify-center ">
              <p>APPLY NOW</p>
            </button>
            </Link>
          </div>
          <div className="mt-20">
            <h3 className="text-lg">
              For any queries, feel free to Contact Us{" "}
            </h3>
            <div className="mt-10 ">
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
                      <div className="text-blue-700 text-2xl">{item.icon}</div>
                      <span className="text-white group-hover:text-accent duration-500">
                        {item.info}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <img
            src="/serviceIcon/Line 3.png"
            alt="line"
            className="h-[4px] w-full  md:w-[50%] mx-auto"
          />
        </section>
      </article>
    </section>
  );
};

export default Internship;