import React, { useState } from "react";
import Hero from "../Components/common/Hero";
import ContactForm from "../Components/common/Form/contactForm";

const StartProject = () => {
  const [modalData, setModalData] = useState({
    show: false,
    description: "",
    position: {},
  });

  // Function to handle button click and update modal content
  const handleButtonClick = (desc, position) => {
    setModalData({ show: true, description: desc, position: position });
  };
  const closeModal = () => {
    setModalData((pre) => ({ ...pre, show: false }));
  };
  // Data for desktop version - First row of buttons
  const firstThreeSteps = [
    {
      url: `${process.env.PUBLIC_URL}/steps/01.png`,
      desc: "We will identify project objectives and constraints. Define scope, budget, and timeline. Obtain approval from you and secure resources for the project.",
      position: { top: "30%", left: "0px" },
    },
    {
      url: `${process.env.PUBLIC_URL}/steps/02.png`,
      desc: "We will develop a detailed project plan outlining tasks, milestones, and deliverables. Allocate resources, establish communication channels, and define roles and responsibilities. Conduct risk assessment and develop mitigation strategies.",
      position: { top: "30%", left: "30%" },
    },
    {
      url: `${process.env.PUBLIC_URL}/steps/03.png`,
      desc: "We will implement the project plan according to the defined scope, schedule, and budget. Assign tasks to team members, monitor progress, and manage changes.",
      position: { top: "30%", right: "0%" },
    },
  ];
  // Data for desktop version - Second row of buttons
  const secondThreeSteps = [
    {
      url: `${process.env.PUBLIC_URL}/steps/06.png`,
      desc: "We will complete all project deliverables and ensure we obtain formal acceptance from you. We will also conduct final inspections and resolve any outstanding issues.",
      position: { top: "50%", left: "0px" },
    },
    {
      url: `${process.env.PUBLIC_URL}/steps/05.png`,
      desc: "We will conduct post-project reviews to evaluate performance and identify lessons learned. Then analyse successes and challenges encountered during project execution.",
      position: { top: "50%", left: "40%" },
    },
    {
      url: `${process.env.PUBLIC_URL}/steps/04.png`,
      desc: "We will track key performance indicators and milestones to ensure alignment with project objectives.",
      position: { top: "50%", right: "0%" },
    },
  ];
  // Data for mobile version - First row of buttons
  const firstMobileSteps = [
    {
      url: `${process.env.PUBLIC_URL}/mobileSteps/step initiation.png`,
      desc: "We will identify project objectives and constraints. Define scope, budget, and timeline. Obtain approval from you and secure resources for the project.",
      position: { top: "10%", left: "0%" },
    },
    {
      url: `${process.env.PUBLIC_URL}/mobileSteps/planning.png`,
      desc: "We will develop a detailed project plan outlining tasks, milestones, and deliverables. Allocate resources, establish communication channels, and define roles and responsibilities. Conduct risk assessment and develop mitigation strategies.",
      position: { top: "25%", left: "0%" },
    },
    {
      url: `${process.env.PUBLIC_URL}/mobileSteps/execution.png`,
      desc: "We will implement the project plan according to the defined scope, schedule, and budget. Assign tasks to team members, monitor progress, and manage changes.",
      position: { top: "48%", left: "0%" },
    },
  ];
  // Data for mobile version - Second row of buttons
  const secondMobileSteps = [
    {
      url: `${process.env.PUBLIC_URL}/mobileSteps/evaluation.png`,
      desc: "We will track key performance indicators and milestones to ensure alignment with project objectives. Evaluate outcomes and impacts, and make adjustments as necessary to optimise project success.",
      position: { top: "65%", left: "0%" },
    },
    {
      url: `${process.env.PUBLIC_URL}/mobileSteps/05.png`,
      desc: "We will conduct post-project reviews to evaluate performance and identify lessons learned. Then analyse successes and challenges encountered during project execution.",
      position: { top: "85%", left: "0%" },
    },
    {
      url: `${process.env.PUBLIC_URL}/mobileSteps/closing.png`,
      desc: "We will complete all project deliverables and ensure we obtain formal acceptance from you. We will also conduct final inspections and resolve any outstanding issues.",
      position: { top: "100%", left: "0%" },
    },
  ];

  return (
    <section>
      <Hero />
      <div className="px-4 sm:!px-10 flex flex-col py-16">
        <h1 className="text-white text-center text-2xl font-[600]   sm:text-5xl ">
          Our Project<span className="text-blue-700"> Cycle</span>
        </h1>
        <div className="flex flex-col justify-center items-center pt-20 relative ">
          <div className="flex flex-col md:flex-row w-full relative">
            {/* First Three Buttons */}
            {firstThreeSteps.map((step, index) => (
              <div key={index} className="md:flex flex-col relative hidden">
                <h1 className="text-blue-700 text-3xl font-[600] text-left absolute -top-8 left-2">
                  0{index + 1}
                </h1>
                <img
                  src={step.url}
                  alt="step"
                  onClick={() => handleButtonClick(step.desc, step.position)}
                />
              </div>
            ))}
            {firstMobileSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col relative md:hidden w-full"
              >
                <h1 className="text-blue-700 text-2xl sm:text-4xl  font-[600] text-left absolute -top-10 left-2">
                  0{index + 1}
                </h1>
                <img
                  src={step.url}
                  alt="step"
                  className="w-full  object-cover"
                  onClick={() => handleButtonClick(step.desc, step.position)}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row w-full">
            {/* Second Three Buttons */}
            {secondThreeSteps.map((step, index) => (
              <div key={index} className="md:flex flex-col relative hidden">
                <h1 className="text-blue-700 text-3xl font-[600] text-left absolute -top-8 right-2">
                  0{5 - index + 1}
                </h1>
                <img
                  src={step.url}
                  alt="step"
                  onClick={() => handleButtonClick(step.desc, step.position)}
                />
              </div>
            ))}
            {/* Second Three Mobile Buttons */}
            {secondMobileSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col relative md:hidden w-full"
              >
                <h1 className="text-blue-700 text-2xl sm:text-4xl font-[600] text-left absolute -top-10 left-2">
                  0{index + 4}
                </h1>
                <img
                  src={step.url}
                  alt="step"
                  className="w-full object-cover"
                  onClick={() => handleButtonClick(step.desc, step.position)}
                />
              </div>
            ))}
            {/* Modal */}
            {modalData.show && (
              <div
                onClick={closeModal}
                className="absolute w-full md:max-w-[300px]  z-40 bg-[#FFFFFF1A] backdrop-filter backdrop-blur-md p-3 rounded-lg text-white text-center"
                style={{
                  top: modalData.position.top,
                  left: modalData.position.left,
                  right: modalData.position.right,
                }}
              >
                <p>{modalData.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div>
        <h1 className="text-white text-center text-2xl  sm:text-5xl py-4">
          Not Sure Where to Begin?
          <span className="text-blue-700">We got you! </span>
        </h1>
        <ContactForm />
      </div>
    </section>
  );
};

export default StartProject;
