import React, { useEffect, useRef, useState, forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import { Pagination,Autoplay } from "swiper/modules";

function AppreciationSection() {
  const testimonials = [
    {
      id: 1,
      name: "Juan S Ortiz Salazar",
      role: "Acme Corp",
      msg: "They were honest about their abilities from the beginning, have fantastic communication skills, and are overall a dream to work with! Myself and my team felt beyond confident of their abilities and that they were doing the work on a week to week basis just as they stated they would. I will definitely be looking to hiring Tecoreng first before considering anyone else on Upwork!!",
    },
    {
      id: 2,
      name: "Tim Loenders",
      role: "BPOS LOENDERS GCV",
      msg: "Paresh worked out the infrastructure topology and did a fine job on that. He gave me insights about how to tackle setup that I didn't have which saved the project time and money.",
    },
    {
      id: 3,
      name: "Denis Cartin",
      role: "CTO, SoSFba",
      msg: "They have good timing and quality in task solving. Their project management was outstanding. Always delivered on time and quickly replied to our needs and demands. The Communication was effective and running smoothly, with constant updates on the project's progress. They also shared significant insights and suggestions for developing the project.",
    },
    {
      id: 4,
      name: "Kean Graham",
      role: "CEO, MonetizeMore",
      msg: "What most impressed us about Technical Core Engineers was their wide range of knowledge and commitment to the completion of our project. They exceeded our expectations rather than meeting them. Their ability to quickly understand the difficulties of our business and personalize their solutions to our specific need was absolutely impressive.",
    },
    {
      id: 5,
      name: "Chetan Patwardhan",
      role: "CEO, HiQuest Group of IT Companies",
      msg: "What most impressed us about Technical Core Engineers was their commitment to delivering a service that exceeded our expectations. Their commitment to the project, dedication to excellence, and willingness to go the extra mile truly distinguish them. They demonstrated a thorough understanding of the business and adjusted their solutions to meet our specific needs.",
    },
  ];
  
  return (
    <section className="flex items-center" style={{ margin: "60px 0" }}>
      <div className="container">
        <div className="sectionTitle">
          <h2 className="container p-0" style={{padding:"0px"}}>Appreciation from Clients</h2>
        </div>
        <div >
        <Swiper
          className="flex flex-col"
          modules={[Pagination,Autoplay]}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={10}
          speed={800}
          slideToClickedSlide={true}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            
          }}
          loop={true}
          loopedslides={5}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 50 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="h-full ">
                <div className="testimonialBox">
                  <div className="clientName">{item.name}</div>
                  <div className="clientPosition">{item.role}</div>
                  <div className="clientComment">{item.msg}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div
            className="swiper-pagination"
          ></div>
        </Swiper>
      </div>


        
      </div>
    </section>
  );
}



export default AppreciationSection;
