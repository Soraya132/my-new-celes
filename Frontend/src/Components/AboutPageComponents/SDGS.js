const SDGS = () => {
    const celestialCraftersData = [
        {
          id: "celestial_crafters_1",
          content: " With 95% of our team members hailing from world countries, we aim to end poverty in all its forms everywhere. With experience and insights into the challenges faced by communities affected by poverty. This deep understanding allows us to develop innovative solutions that address the root causes of poverty and empower individuals and communities to uplift themselves.",
          imageUrl: "SDGs/E-WEB-Goal-01.png"
        },
        {
          id: "celestial_crafters_2",
          content: "Through comprehensive training programs, the company enhances the technical and leadership skills of women, thereby promoting quality education and facilitating their active participation in the tech industry.",
          imageUrl: "SDGs/E-WEB-Goal-04.png"
        },
        {
          id: "celestial_crafters_3",
          content: "With 75% of the technology industry occupied by men and the Tech industry in Kenya hosting only 15% of women we as celestial crafters are looking to bridge the gender gap and break gender stereotype in the technology sector considering it's male dominated we bring a rich and diverse team of women from all over the globe to empower and enrich their skills equally and take on leadership roles.",
          imageUrl: "SDGs/E-WEB-Goal-05.png"
        },
        {
          id: "celestial_crafters_4",
          content: "The company invests in comprehensive training programs to enhance technical and leadership skills of women, contributing to sustainable economic growth and providing decent work opportunities.",
          imageUrl: "SDGs/E-WEB-Goal-08.png"
        },
        {
          id: "celestial_crafters_5",
          content: "The company's initiatives foster technological advancement within the tech sector, promoting innovation and productivity while creating a more inclusive environment for women.",
          imageUrl: "SDGs/E-WEB-Goal-09.png"
        },
        {
          id: "celestial_crafters_6",
          content: "We are committed to reducing inequalities by fostering an inclusive and diverse workforce.We offer a safe and supportive workplace for persons from the LGBTQIA+ community we make them feel valued and respected at our workplace. We also encourage persons with disability to join our team.",
          imageUrl: "SDGs/E-WEB-Goal-10.png"
        },
        {
          id: "celestial_crafters_7",
          content: "The company's commitment to creating a more just and equitable work environment for women in the tech sector contributes to the broader goal of promoting peace, justice, and strong institutions within society.",
          imageUrl: "SDGs/E-WEB-Goal-16.png"
        },
        {
          id: "celestial_crafters_8",
          content: "Celestial Crafters collaborates with various stakeholders to advance its initiatives, fostering collaborative partnerships aimed at achieving gender equality and promoting sustainable development within the tech sector.",
          imageUrl: "SDGs/E-WEB-Goal-17.png"
        }
      ];
      
  return (
    <section className='text-white px-4 sm:px-10'>
    <div>
        <h1 className='text-center pb-4 text-2xl font-[600]'>Celestial Crafters & SDGs</h1>
        <p className='text-center text-gray-200'>At Celestial Crafters (CC), our mission is to integrate the Sustainable Development Goals (SDGs) into our core objectives and initiatives.   Celestial Crafters' commitment to SDGs 1, 4, 5, 8, 9, 10, 16, and 17 aligns with our goals as we aim to make a meaningful impact in the technology sector. Through targeted strategies and collaborative efforts, we aim to empower women within the tech industry, create opportunities for economic growth, foster inclusive policies, and contribute to a more just and equitable society.</p>
    </div>
    <div className="grid sm:grid-cols-2 justify-between py-16  gap-y-8 !gap-x-10">
        {celestialCraftersData.map((item)=>{
            return(
                <div key={item.id}>
                <div className="pb-3">
                    <img src={item.imageUrl} alt="sdg" className="w-28"/>
                </div>
                <p>{item.content}</p>
                
            </div>)
        })}
    </div>

    </section>
  )
}

export default SDGS