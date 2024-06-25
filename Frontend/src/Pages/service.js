import "../Styles/service.css";
import Hero from "../Components/common/Hero";
import StartProjectButton from "../Components/common/StartProjectButton";
const servicesData = [
  {
    id: 1,
    title: "SOFTWARE DEVELOPMENT",
    description:
      "software development is at the heart of what we do. We specialize in creating innovative solutions tailored to meet the unique needs of our clients. from static, dynamic to corporate website we got everything under control.",
    image: "../images/softwaredev.png",
  },
  {
    id: 2,
    title: "DATA ANALYTICS",
    description:
      "Unlocking Data Insights: Our expertise spans descriptive, diagnostic, and predictive analytics, transforming raw data into actionable insights. With cutting-edge tools and methodologies, our team empowers you to make informed decisions and seize new opportunities.",
    image: "./images/dataanalytics.png",
  },
  {
    id: 3,
    title: "APP DEVELOPMENT",
    description:
      "Our web development ensures seamless design and functionality across devices, prioritizing user experience. In mobile app development, we excel in creating high-performance, scalable solutions for both iOS and Android.",
    image: "../images/projectmanagemnet.png",
  },
  {
    id: 4,
    title: "CYBERSECURITY",
    description:
      "Our cybersecurity services ensure robust protection and proactive defense against threats, prioritizing the security and integrity of your digital assets. In network security, we excel in implementing comprehensive, scalable solutions tailored to safeguard both small businesses and large enterprises.",
    image: "../images/cybersecurity.png",
  },
  {
    id: 5,
    title: "UIUX DESIGN",
    description:
      "Our service revolves around crafting seamless and meaningful user experience. We deeply understand your users' behaviors, needs, and motivations through research, personas, and journey mapping. Our dedicated UI/UX designers blend creativity with usability principles to create visually stunning interfaces that elevate user satisfaction and engagement.",
    image: "../images/uiux.png",
  },
  {
    id: 6,
    title: "DIGITAL MARKETING",
    description:
      "Elevate your online presence with our comprehensive digital marketing solutions. From search engine optimization (SEO) to targeted social media advertising, we employ cutting-edge strategies to boost your visibility and drive conversions. Let us help you navigate the digital landscape and reach your target audience with precision and impact.",
    image: "../images/digitalmarketing.png",
  },
 
  {
    id: 7,
    title: "BRANDING",
    description:
      "Define your identity and leave a lasting impression with our branding services. We work closely with you to develop a cohesive brand strategy that encapsulates your values, vision, and voice. From logo design to brand messaging, we'll help you tell your story authentically and consistently across all channels, building trust and loyalty among your audience.",
    image: "../images/branding.png",
  },
  {
    id: 8,
    title: "SOCIAL MEDIA MANAGEMENT",
    description:
      "Harness the power of social media to connect, engage, and grow your audience. Our expert social media management team crafts tailored content, implements strategic campaigns, and monitors analytics to ensure your brand stands out in the crowded digital sphere. Whether it's community building or influencer partnerships, we'll help you cultivate meaningful connections that drive results.",
    image: "../images/socialmedia.png",
  },
  {
    id: 9,
    title:"GRAPHICS AND DESIGN",
    description:
      "Make a statement with captivating visuals that resonate with your audience. Our talented team of designers combines creativity with technical expertise to deliver stunning graphics that command attention and convey your brand's message effectively. Whether it's website graphics, promotional materials, or packaging design, we'll bring your vision to life with style and flair.",
    image: "../images/graphic10.png",
  },
];

const service = () => {
  return (
    <section className=" ">
      <Hero />

      <div className="every px-4 sm:!px-10 ">
        <h1 className="py-10 text-white text-4xl font-[600]">
          WHAT WE <span className="de">DELIVER</span>
        </h1>
        {/* what we deliver */}
        <div className="flex flex-col gap-3 py-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 items-center w-fll py-10">
            <div className="acc flex flex-col px-3 items-center">
              <div>
                <img
                  src="/serviceIcon/accuracy.png"
                  alt="accuracy"
                  className="pho"
                />
                <h2 className="pb-3">ACCURACY</h2>
                <p>
                  We ensure precise and error-free solutions to meet our clients
                  requirements.
                </p>
              </div>
            </div>

            <div className="tim flex flex-col items-center ">
              <div>
                <img
                  src="/serviceIcon/timely.png"
                  alt="timeliness"
                  className="pho"
                />
                <h2>TIMELINESS</h2>
                <p>
                  We prioritize delivering our products/services on schedule
                  meeting deadlines consistently.
                </p>
              </div>
            </div>

            <div className="exc flex flex-col items-center">
              <div>
                <img
                  src="/serviceIcon/rename.png"
                  alt="excellence"
                  className="pho"
                />
                <h2>EXCELLENCE</h2>
                <p>
                  We strive for excellence in all aspects of our work, aiming to
                  exceed our clients expectations with every delivery.
                </p>
              </div>
            </div>
          </div>
          <img
            src="/serviceIcon/Line 3.png"
            alt="line"
            className="h-[4px] w-full  md:w-[50%] mx-auto"
          />
        </div>

        {/* our services section */}
        <div className="our">
          <h1 className="py-10 text-white text-4xl font-[600]">
            OUR <span className="de">SERVICES</span>
          </h1>
          <article className="flex flex-col w-full">
            {servicesData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="py-4 p-3 rounded-lg custom-border "
                >
                  <div className="flex w-full gap-5 lg:!items-center">
                    <h2
                      className="!pt-4 !text-blue-700 hidden sm:flex
              !text-[50px]"
                    >
                      0{item.id}{" "}
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:!justify-between w-full gap-2 items-center">
                      <h2 className="pt-3 text-xl font-[600] hidden lg:flex">
                        {item.title}
                      </h2>
                      <div>
                        <img
                          src={item.image}
                          alt="software"
                          className="lg:w-[90px] lg:h-full w-[60px] object-fill pb-4"
                        />
                        <h2 className="pt-3 lg:hidden text-lg pb-3">
                          {item.title}
                        </h2>
                        <p className="text-md">{item.description}</p>
                        <div className="mt-2 mb-5">
                          <StartProjectButton />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </article>
        </div>
      </div>
    </section>
  );
};

export default service;
