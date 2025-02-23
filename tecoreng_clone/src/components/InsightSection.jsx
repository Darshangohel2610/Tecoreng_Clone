import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import React from 'react'

function InsightSection() {
  const blogs = [
    {
        title:"How to Prevent Privacy Violations on Mobile Apps",
        imgsrc:"/blog1.webp",
        date:"26-07-2022-",
        desc:"Your data might be stolen via apps. Is there a danger that your private information is being exposed by these insignificant items that diligently do your orders while sitting on your phone? Yes! It’s possible. It’s possible to unintentionally download malicious software that steals data if you utilize a lot of apps. Additionally, it is […]",
    },
    {
        title:"IT Service Management (ITSM): Useful Processes & Frameworks",
        imgsrc:"/blog2.webp",
        date:"13-06-2023-",
        desc:"IT Service Management (ITSM) and its useful process and framework. Technical Core Engineers disclose the whole process and benefits of this framework. So, Stick with us and explore more! In today’s fast-paced digital world, organizations heavily rely on information technology to drive their operations, enhance productivity, and deliver seamless services to customers. To ensure the […]",
    },
    {
        title:"What Is React Native And Benefits For Mobile App Development",
        imgsrc:"/blog3.jpg",
        date:"02-01-2023-",
        desc:"What Is React Native it’s Main used for developing a mobile application. That launch by Meta. Tecoreng presents its benefits for native developers.  React Native is a platform for building cross-platform apps. That is an open-source java Script framework. React Native is a more powerful platform for building apps on multiple platforms like Android, IOS, […]",
    },
    {
        title:"Blockchain In Cloud Computing",
        imgsrc:"/blog4.webp",
        date:"09-07-2022-",
        desc:"Blockchain comprises different elements which give importance to it like decentralization, straightforwardness, and security. These elements have made Blockchain a progressive and promising innovation with a few modern uses for the present-day age in the present time. By the interlinking of distributed computing and the Internet of Things, the Cloud of Things field appeared. Here […]",
    },
    {
        title:"How Could the Blockchain Revolutionize the Automotive Sector?",
        imgsrc:"/blog5.webp",
        date:"05-07-2022-",
        desc:"Utilized essentially by Bitcoin to get monetary exchanges, the blockchain keeps on seeing its utilization reach out to different areas. The car universe could likewise hold onto the subject in the years to come. An inquiry then, at that point, emerges: how should the blockchain change the auto area? Blockchain, what’s going on here? The […]",
    },
    {
        title:"What Is DevOps? Top DevOps Trends 2023",
        imgsrc:"/blog6.webp",
        date:"17-10-2023-",
        desc:"Within the context of contemporary software development and IT operations, DevOps is a critical and revolutionary methodology. The very phrase “DevOps” is a combination of the words “development” and “operations,” signifying the fundamental idea of merging these two historically distinct fields. DevOps is a cultural movement that strives to promote cooperation, communication, and automation between […]",
    },
  ]
    return (
        <section className="flex items-center" style={{ margin: "60px 0" }}>
      <div className="container">
        <div className="sectionTitle">
          <h2 className="container p-0" style={{padding:"0px"}}>Tecoreng insights</h2>
        </div>
        <div >
        <Swiper
          className="flex flex-col"
          modules={[Autoplay]}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={10}
          speed={800}
          slideToClickedSlide={true}
          loop={true}
          loopedslides={5}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween:50 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {blogs.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full ">
                <div className="insightBox">
                    <div className="h-[250px] w-full rounded-[20px]">
                        <span className="text-transparent w-full h-full inline-block insightBoxImage">
                        <img  className="rounded-t-[20px] object-cover overflow-hidden w-full h-full" src={item.imgsrc} />
                        </span>
                    </div>
                    <div className="blogDesc">
                        <div className="blogDescTitle">{item.title}</div>
                        <div className="blogDescDate">
                            {item.date}
                            <span>Paresh Solanki</span>
                        </div>
                        <div>
                            <p className="text-[12px] sm:text-sm">{item.desc}</p>
                        </div>

                    </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>


        
      </div>
    </section>
  )
}

export default InsightSection