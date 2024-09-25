// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Keyboard, Scrollbar, Navigation } from "swiper/modules";
import "./Testimonial.css";

const servicesData = [
  {
    title: "John Smith",
    role:" CEO of XYZ Company",
    description:"Celestial Crafters transformed our online presence with their impeccable website development skills. Their attention to detail and dedication to our project ensured a seamless experience from start to finish.",
     url: `${process.env.PUBLIC_URL}/temsti/Ellipse 72.png`
    
  },
  {
    title: "Sarah Lee", 
    role:" Manager at Global Solutions Corp",
    description:"Celestial Crafters exceeded our expectations in every way. From project management to SEO optimization, their expertise and dedication were evident throughout the entire process. We highly recommend Celestial Crafters to anyone looking for exceptional tech solutions.",
     url: `${process.env.PUBLIC_URL}/temsti/Ellipse 75.png`
    
  },
  {
    title: " Emily Rodriguez",
    role:" CEO of InnovateTech Solutions",
    description:"Working with Celestial Crafters was a game-changer for us. Their commitment to diversity and inclusion, combined with their expertise in UX/UI design and SEO, helped us elevate our digital presence. I highly recommend them to any business looking to drive success online.",
    url: `${process.env.PUBLIC_URL}/temsti/Ellipse 70.png`
   
    
  }
];
const TestimonialSwiper = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        spaceBetween={20}
        navigation
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          900: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1200: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation]}
        className="mySwiper mx-10 swiper-wraper "
      >
        {servicesData.map((service, index) => {
          return (
            <SwiperSlide key={index + 1} className="">
              <div className="w-[150px] h-[150px] rounded-full mx-auto  my-10">
                <img
                  src={service.url}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="bg-white/5 h-full rounded-lg p-3 flex flex-col gap-x-6">
                {/* title and description */}
                <div className="mb-8 text-white">
                  <div className="mb-2 text-lg text-center">
                    <span className="text-blue-700"> {service.title}</span>{service.role}
                  </div>
                  <p className="text-center leading-normal italic text-md font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default TestimonialSwiper;
