const Hero = () => {
  return (
    <section
        className=" min-h-300px bg-center bg-cover w-full h-full md:bg-norepeamd:t"
        style={{ backgroundImage: "url('Assets/workimage.jpg')" }}
      >
        <div className="px-4 sm:!px-10 py-10 text-white">
          <p className="pb-2 !text-3xl">We are</p>
          <h2 className="pb-2 !text-3xl topIntro">Celestial Crafters,</h2>
          <p className="!text-3xl">
          we drive innovation in the tech industry while fostering diversity, inclusivity, and women's empowerment.
          </p>
        </div>
      </section>
  )
}

export default Hero