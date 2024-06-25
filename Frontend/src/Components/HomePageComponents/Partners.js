import React from "react";

const Partners = () => {
  const celestialCraftersData = [
    {
      id: "celestial_crafters_1",
      imageUrl: "/partners/Rec21 1.png",
    },
    {
      id: "celestial_crafters_2",

      imageUrl: "/partners/Rec22 1.png",
    },
    {
      id: "celestial_crafters_3",

      imageUrl: "/partners/Rec23 1.jpg",
    },
    {
      id: "celestial_crafters_4",

      imageUrl: "/partners/Rec24 1.png",
    },
    {
      id: "celestial_crafters_5",
      imageUrl: "/partners/Rec25 1.png",
    },
  ];

  return (
    <div className="px-4 sm:!px-10 py-2">
      <h1 className="text-4xl  text-white font-[600] text-center pb-8 ">
        Our <span className="text-blue-700">Partners</span>
      </h1>
      <div className="flex justify-between items-center mx-auto gap-2 md:gap-10">
        {celestialCraftersData.map((item) => {
          return (
            <div key={item.id}>
              
                <img src={item.imageUrl} alt="sdg" className="object-cover w-full" />
             
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
