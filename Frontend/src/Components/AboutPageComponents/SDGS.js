const SDGS = () => {
  const celestialCraftersData = [
    {
      id: "celestial_crafters_1",
      imageUrl: "SDGs/E-WEB-Goal-01.png",
    },
    {
      id: "celestial_crafters_2",
      imageUrl: "SDGs/E-WEB-Goal-04.png",
    },
    {
      id: "celestial_crafters_3",
      imageUrl: "SDGs/E-WEB-Goal-05.png",
    },
    {
      id: "celestial_crafters_4",
      imageUrl: "SDGs/E-WEB-Goal-08.png",
    },
    {
      id: "celestial_crafters_5",
      imageUrl: "SDGs/E-WEB-Goal-09.png",
    },
    {
      id: "celestial_crafters_6",
      imageUrl: "SDGs/E-WEB-Goal-10.png",
    },
    {
      id: "celestial_crafters_7",
      imageUrl: "SDGs/E-WEB-Goal-16.png",
    },
    {
      id: "celestial_crafters_8",
      imageUrl: "SDGs/E-WEB-Goal-17.png",
    },
  ];

  return (
    <section className="text-white px-4 sm:px-10">
      <div>
        <h1 className="text-center pb-4 text-2xl font-[600]">
          Celestial Crafters & SDGs
        </h1>
        <p className="text-center text-gray-200">
          Our mission is to integrate the
          Sustainable Development Goals (SDGs) into our core objectives and
          initiatives. Celestial Crafters' commitment to SDGs 1, 4, 5, 8, 9, 10,
          16, and 17 aligns with our goals as we aim to make a meaningful impact
          in the technology sector. We aim to empower women within the tech
          industry, create opportunities for economic growth, foster inclusive
          policies and contribute to a more just and equitable society.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-between py-12 gap-y-6 gap-x-4">
        {celestialCraftersData.map((item) => {
          return (
            <div key={item.id} className="flex flex-col items-center">
              <div className="pb-2">
                <img src={item.imageUrl} alt="sdg" className="w-20 h-auto" />
              </div>
              <p className="text-center text-gray-200">
                {item.content || ""}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SDGS;
