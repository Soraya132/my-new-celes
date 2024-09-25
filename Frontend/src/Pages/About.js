import "../Components/AboutPageComponents/About.css";
import { listData } from "../data/ListData";
import Team from "../Components/AboutPageComponents/Team/Team";
import Hero from "../Components/common/Hero";
import SDGS from "../Components/AboutPageComponents/SDGS";
import ContactForm from "../Components/common/Form/contactForm";

const mission = [
  {
    topic: "OUR VISION",
    text1:
      "We envision a world where gender disparities in tech is a thing of the past. We foresee a Kenya where technology is not only 15% occupied by women but an increase with at least 10% in the next 3 years.",
    img: `${process.env.PUBLIC_URL}/Assets/BigImages/vision.png`,
  },
  {
    topic: "OUR MISSION",
    text1:
      "Celestial Crafters' mission is to drive innovation in the technology industry while fostering diversity, inclusivity, and empowerment. We are committed to promoting equality and reducing inequalities by providing equal opportunities for women and persons with disabilities. Through our core values of innovation, integrity, teamwork, and sustainability, we strive to inspire the next generation of leaders while breaking down barriers and creating a more equitable and inclusive world.",
  img: `${process.env.PUBLIC_URL}/Assets/BigImages/mission.png`
  },
];

const about = [
  {
    topic: "Our Unique Culture.",
    text1:
      "our culture is defined by a commitment to empowering women and youth in tech through innovation, collaboration, and social impact. As a women-only, youth-driven tech company. Our team thrives on pushing the boundaries of technology with sustainable, eco-friendly and socially responsible solutions while creating transformative digital experiences. We take pride in our craftsmanship and prioritize Mentorship, Partnerships, Continuous Learning, and Adaptability positioning us as a forward-thinking, socially conscious leader in the tech industry.",
    img: `${process.env.PUBLIC_URL}/Assets/aboutus1.jpg`,
  },
  {
    topic: "Empowering Women in Tech.",
    text1:
      "Our commitment to empowering women in tech goes beyond our projects; it's a part of our core values",
    img: `${process.env.PUBLIC_URL}/Assets/aboutus2.jpg`,
  },
  {
    topic: "Beyond the Code.",
    text1:
      "We actively contribute to local economies, provide mentorship, and engage in philanthropy.",
    img: `${process.env.PUBLIC_URL}/Assets/aboutus3.jpg`,
  },
];
const lunchData1 = [
  {
    number: "2024",
    proof: "Celestial Crafters was launched",
  },

  {
    number: "50+",
    proof: "Trusted And Satisfied Clients",
  },
];
const launchData2 = [
  {
    number: "3.5",
    proof: "Years of experience",
  },

  {
    number: "1K +",
    proof: "Positive reviews",
  },
];
export default function About() {
  return (
    <section className="overflow-x-hidden 100vw">
      {/* top intro */}
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:!px-10 py-20">
        <h1 className="text-white text-4xl lg:text-5xl font-[600]">
          Our Goal is to <span className="topIntro">IGNITE</span> transformative
          change.
        </h1>
        <div className="text-white">
          <p className="pb-2">
            Our journey began with a passion for tech and we've evolved into a
            trusted platform for creativity.
          </p>
          <p>
            Our team is committed to delivering excellence, ensuring you
            experience.
          </p>
        </div>
      </section>
      {/* about */}
      <section className="py-10 px-4 sm:!px-10 ">
        {about.map((item, index) => {
          return (
            <div
              key={index + "hi"}
              className={`${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              } flex flex-col md:flex-row gap-8 text-white pb-20`}
            >
              <div className="flex-1">
                <img
                  src={item.img}
                  alt="women1"
                  className={`rounded-2xl object-cover w-full h-full md:h-[320px] md:w-[400px] lg:w-[400px]`}
                />
              </div>
              <div className="flex-1">
                <h4 className="text-3xl pb-2 lg:pb-5">{item.topic}</h4>
                <p className="leading-7">{item.text1}</p>
              </div>
            </div>
          );
        })}
      </section>
      <section>
        <SDGS />
      </section>
      {/* why choose us */}
      <section className="px-4 sm:!px-10 py-10">
        <h3 className="text-5xl text-center text-white pb-20">
          WHY CHOOSE <span className="text-blue-700">US?</span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
          <img
            src={`${process.env.PUBLIC_URL}/Assets/BigImages/clearimage.png`}
            alt="why choose us"
            className="hidden lg:flex"
          />
          <div className="flex flex-col">
            {listData.map((item, index) => (
              <div className="text-white pb-5" key={index + "choose"}>
                <h5 className="text-blue-700 pb-3 text-xl font-[400]">
                  {item.topic}
                </h5>
                <p className="text-lg">{item.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* mission */}
      {/* mission */}
      <section className="flex flex-col md:flex-row py-10 px-5 items-center justify-center gap-8">
        {mission.map((item, index) => {
          return (
            <div
              key={index + "mission"}
              className="text-white h-[450px] border mission-vision flex flex-col items-center w-[500px] py-5 px-8 rounded-2xl"
            >
              <img
                src={item.img}
                alt="vision"
                className="mx-auto pb-3 w-[70px]"
              />
              <h4 className="text-lg font-semibold pb-4 text-center">
                {item.topic}
              </h4>
              <p className="text-center leading-6 text-sm">{item.text1}</p>
            </div>
          );
        })}
      </section>

      {/* launch celestial crafters */}
      <section className="what-we-do px-4 sm:!px-10 py-10">
        <img
          src={`${process.env.PUBLIC_URL}/Assets/BigImages/aboutus-big.jpg`}
          alt="what we do"
          className="w-full h-[300px] rounded-2xl mx-auto object-cover"
        />

        <div className="flex lg:flex-row items-center flex-col-reverse lg:!mx-10">
          <div className="done  flex flex-row justify-between gap-3 mx-4 sm:mx-6 md:mx-16 lg:!mx-0 text-white py-10 lg:!py-1">
            <div className="flex flex-col gap-2 justify-between">
              {lunchData1.map((item, index) => {
                return (
                  <div key={index + "lanunch"}>
                    <h5 className="done-items">{item.number}</h5>
                    <p className="text-lg font-medium">{item.proof}.</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 justify-between">
              {launchData2.map((item, index) => {
                return (
                  <div key={index + "data1"}>
                    <h5 className="done-items">{item.number}</h5>
                    <p className="text-lg font-medium">{item.proof}.</p>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="text text-white lg:!px-28 lg:!py-16 -mt-5 lg:-mt-28 mx-2 sm:mx-5 md:!mx-14 lg:!mx-0">
            We are dedicated to providing quality service that redefine industry
            standards.
          </p>
        </div>
      </section>
      {/* team section */}
      <section>
        <Team />
      </section>
      <ContactForm />
    </section>
  );
}






