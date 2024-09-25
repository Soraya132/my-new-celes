// Nav.js
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DonateModal from "../DonateModal";
import { motion } from "framer-motion";
import "./Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // const mobileButton = () => {
  //   setShowProfile(true);
  //   setIsOpen(false);
  // };
  return (
    <>
      <nav className="flex justify-between items-center pt-7 pb-2 px-4 sm:!px-10">
        <div>
          <NavLink to="/">
          <img src={`${process.env.PUBLIC_URL}/Assets/icons/logo.png`} alt="logo" className="w-[80px]" />
          </NavLink>
        </div>
        <div className=" lg:hidden text-white pb-2" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        <ul className="hidden lg:flex gap-2 items-center justify-between text-white">
          {[
            { link: "/", name: "Home" },
            { link: "/about", name: "About" },
            { link: "services", name: "Services" },
            { link: "work", name: "Our Work" },
            { link: "startProject", name: "Request Services" },
          ].map((item, index) => {
            return (
              <li key={index + "link"}>
                <NavLink
                  to={item.link}
                  className="hover:border-b-[4px] border-b-[#0FD0F9] hover:transitio-all hover:duration-100 pb-2 px-2"
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
          <li>
            <Link
              to="/donate"
              className="text-white flex justify-center items-center text-sm font-semibold py-3 ml-3 px-10 bg-blue-700 rounded-md gap-1"
            >
             <img src={`${process.env.PUBLIC_URL}/donate/heart.png`} alt="heart" className="w-7" />
              <p>Donate</p>
            </Link>
          </li>
        </ul>
      </nav>
      <DonateModal setShowModal={setShowProfile} showModal={showProfile} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          isOpen ? { display: "flex", opacity: 1 } : { opacity: 0, scale: 0 }
        }
        transition={{ duration: 0.3 }}
        className="absolute z-30 flex flex-col w-screen backdrop-filter backdrop-blur-2xl bg-black/50  h-screen px-4 items-center pt-4 top-0 right-0 left-0 "
      >
        <div className="flex justify-between gap-2 w-[100%] items-center">
          <div>
            <NavLink to="/">
              <img
              src={`${process.env.PUBLIC_URL}/Assets/icons/logo.png`} 
                alt="logo"
                className="w-[80px]"
              />
            </NavLink>
          </div>
          <div onClick={toggleMenu} className="text-white pb-4 pr-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M13.354 3.354a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0z"
              />
              <path
                fillRule="evenodd"
                d="M3.354 3.354a.5.5 0 0 0 0 .708l10 10a.5.5 0 0 0 .708-.708l-10-10a.5.5 0 0 0-.708 0z"
              />
            </svg>
          </div>
        </div>

        <nav className=" pt-20">
          <ul className="flex flex-col items-center text-center gap-6 text-white">
            {[
              { link: "/", name: "Home" },
              { link: "/about", name: "About" },
              { link: "services", name: "Services" },
              { link: "work", name: "Our Work" },
              { link: "startProject", name: "Start Project" },
            ].map((item, index) => {
              return (
                <li key={index + "mobile"} onClick={toggleMenu}>
                  <NavLink
                    to={item.link}
                    className="hover:border-b-[2px] border-b-blue-700 hover:transitio-all hover:duration-100 pb-2 px-2"
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}

            <Link
              to="/donate"
              onClick={toggleMenu}
              className="text-white text-sm font-semibold py-3 px-10 bg-blue-700 rounded-md flex items-center justify-center gap-1"
            >
              <img src={`${process.env.PUBLIC_URL}/donate/heart.png`} alt="heart" className="w-7" />
              <p>Donate</p>
            </Link>
          </ul>
        </nav>
      </motion.div>
    </>
  );
};

export default Nav;
