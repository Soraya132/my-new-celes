import { useState } from 'react';
import InsightCard from "./InsightCard";

const Explore = () => {
  const [active, setActive] = useState(1);
  const exploreWorlds = [
    {
      imgUrl: "/Assets/aboutus1.jpg",
      id: 1,
      title: "Our Unique Culture.",
      text: "At the heart of Celestial Crafters is a unique culture that celebrates diversity and inclusion.",
      buttonText: "Read More",
    },
    {
      imgUrl:"/Assets/aboutus2.jpg",
      id: 2,
      title: "Empowering Women in Tech.",
      text: "Celestial Crafters is not just a tech company; it's a movement. Our commitment to empowering women in tech goes beyond our projects.",
      buttonText: "Read More",
    },
    {
      imgUrl: "/Assets/aboutus3.jpg",
      id: 3,
      title: "Beyond the Code.",
      text: "Success for us is measured beyond lines of code. We actively contribute to local economies, provide mentorship, and engage in philanthropy.",
      buttonText: "Read More",
    },
  ];
  return (
    <section className="xs:py-8 py-12 w-full">
      <div
        
        className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[100vh] lg:min-h-[65vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <InsightCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))} 
        </div>
      </div>
    </section>
  );
};

export default Explore;





