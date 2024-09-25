// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import  { Keyboard, Scrollbar, Navigation } from "swiper/modules";

import "../../HomePageComponents/Testimonial/Testimonial.css";
import { TeamData } from "./TeamData";

const Team = () => {

  return (
    <div className="px-10 lg:px-20 py-20">
      <div className="relative z-20 flex flex-col xl:flex-row gap-8 justify-center items-center">
        <div>
          <h1 className="font-[600] text-5xl text-white text-center lg:!text-left">
            MEET OUR TALENTED <span className="text-blue-700"> TEAM</span>
          </h1>
        </div>
        <div className="w-[80%] xl:w-[60%] relative xl:!mx-6 mx-auto ">
          <div>
            <Swiper
              slidesPerView={1}
              centeredSlides={false}
              slidesPerGroupSkip={1}
              grabCursor={true}
              spaceBetween={15}
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
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                },
                1200: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                },
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Keyboard, Scrollbar, Navigation]}
              className="mySwiper mx-10 swiper-wraper  "
            >
              {TeamData.map((item) => {
                return (
                  <SwiperSlide
                    key={item.id}
                    className="w-full bg-[#090909] rounded-2xl"
                  >
                    <div className="w-full">
                      <img
                        src={item.img}
                        alt="member"
                        className="mx-auto rounded-tr-2xl rounded-tl-2xl h-[240px] object-cover w-full "
                      />
                      <p className="text-blue-700 text-center text-lg py-2 ">
                        {item.name}
                      </p>
                      <p className="text-white text-center text-md">
                        {item.role}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
