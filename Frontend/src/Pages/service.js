import "../Styles/service.css";
import Hero from "../Components/common/Hero";
import StartProjectButton from "../Components/common/StartProjectButton";

const servicesData = [
  {
    id: 1,
    title: "WEBSITE DEVELOPMENT",
    description:
      "We build static websites with fixed content, dynamic websites that update with new information, and e-commerce websites for online shopping. Development also involves writing the code, setting up databases and integrating third-party tools like payment gateways.",
    image: `${process.env.PUBLIC_URL}/images/softwaredev.png`,
  },
  {
    id: 2,
    title: "MOBILE APP DEVELOPMENT",
    description:
      "Mobile App Development services covers both front-end and back-end development, including native app development for iOS and Android, as well as cross-platform solutions using frameworks like React Native and Flutter.",
    image: `${process.env.PUBLIC_URL}/images/projectmanagemnet.png`,
  },
  {
    id: 3,
    title: "UI/UX DESIGN",
    description:
      "We create interactive prototypes, mobile app interfaces, and responsive web designs that adapt to different devices and screen sizes. We also do responsive Website Design and Mobile App Designs. Each of these designs plays a crucial role in ensuring a cohesive and user-friendly digital experience.",
    image: `${process.env.PUBLIC_URL}/images/uiux.png`,
  },
  {
    id: 4,
    title: "WEB APPLICATIONS",
    description:
      "we specialize in creating dynamic and fully responsive web applications tailored to meet the specific needs of businesses and organizations. Our web apps are designed to enhance user experiences, streamline operations, and scale your digital presence.",
    image: `${process.env.PUBLIC_URL}/images/socialmedia.png`,
  },
  {
    id: 5,
    title: "ARTIFICIAL INTELLIGENCE",
    description:
      "Elevate your online presence with our comprehensive automated AI solutions. From model training, chatbots to customized solutions.",
    image: `${process.env.PUBLIC_URL}/images/digitalmarketing.png`,
  },
  {
    id: 6,
    title: "BLOCKCHAIN",
    description:
      "Harness the unique features of blockchain technology to solve problems and create opportunities.",
    image: `${process.env.PUBLIC_URL}/images/socialmedia.png`,
  },
];

const Service = () => {
  return (
    <section className="service-section">
      <Hero />

      <div className="services-container px-4 sm:px-10">
        <h1 className="header py-10 text-white text-4xl font-semibold">
          WHAT WE <span className="highlight">DELIVER</span>
        </h1>

        <div className="service-features flex flex-col gap-3 py-6 w-full">
          <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start py-10">
            {servicesData.map((item) => (
              <div
                key={item.id}
                className="feature-item p-3 rounded-lg border border-gray-300"
              >
                <div className="flex gap-3 items-start">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="feature-image w-[60px] h-[60px] object-cover"
                  />
                  <div>
                    <h2 className="feature-title text-lg font-semibold">
                      {item.title}
                    </h2>
                    <p className="feature-description text-sm">
                      {item.description}
                    </p>
                    <div className="mt-2">
                      <StartProjectButton />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/serviceIcon/Line%203.png`}
            alt="line"
            className="line-image h-[4px] w-full md:w-[50%] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
