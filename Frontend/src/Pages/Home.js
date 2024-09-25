import LandPage from "../Components/HomePageComponents/LandPage";
import Request from "../Components/HomePageComponents/Request/Request";
import AiProjects from "../Components/HomePageComponents/AiProjects";
import WorkSolutions from "../Components/HomePageComponents/WorkSolutions";
import OurTestimonials from "../Components/HomePageComponents/Testimonial/OurTestimonials";
import Partners from "../Components/HomePageComponents/Partners";
import ContactForm from "../Components/common/Form/contactForm";
const Home = () => {
  return (
    <div className="bg-[#000]">
      <Request />
      <Partners/>
      <LandPage />
       <AiProjects />
      <WorkSolutions />
      <OurTestimonials />
      <section>
      <ContactForm />
      </section>
     
    </div>
  );
};

export default Home;
