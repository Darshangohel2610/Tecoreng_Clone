import React, { useState } from "react";

function ServiceSection() {
  const webService = {
    main_img: "/webService.webp",
    title: "Web Development",
    inner_text:
      "Transform your business concepts with our web development services, crafting innovative and next-generation websites.",
    tech_Details: [
      { img: "/react-js.svg", name: "React Js" },
      { img: "/angular.svg", name: "Angular" },
      { img: "/laravel.svg", name: "Laravel" },
      { img: "/nodejs.svg", name: "Node Js" },
    ],
  };
  const mobileService = {
    main_img: "/mobileService.webp",
    title: "Mobile App Development",
    inner_text:
      "Drive digital evolution by creating scalable, compelling, and feature-rich mobile applications.",
    tech_Details: [
      { img: "/android.svg", name: "Android" },
      { img: "/apple.svg", name: "Apple" },
      { img: "/flutter.svg", name: "Flutter" },
      { img: "/ionic.svg", name: "Ionic" },
    ],
  };
  const graphicDesign = {
    main_img: "/graphic.webp",
    title: "Graphics Design",
    inner_text:
      "Through our creatively inspired and strategically guided solutions, we assist your brand in establishing emotional connections with consumers.",
    tech_Details: [
      { img: "/illustrator.svg", name: "Illustrator" },
      { img: "/photoshop.svg", name: "Photoshop" },
      { img: "/devicon_sketch.svg", name: "CorelDraw" },
      { img: "/diamond.svg", name: "Ionic" },
    ],
  };
  const uiux = {
    main_img: "/uiux.webp",
    title: "UI/UX Design",
    inner_text:
      "We specialise in crafting professional and creative websites. Our designers create websites that are both search engine and user-friendly.",
    tech_Details: [
      { img: "/figmasvg.svg", name: "Figma" },
      { img: "/adobe.svg", name: "Adobe" },
      { img: "/zeplin.svg", name: "Zeplin" },
      { img: "/invision.svg", name: "Invision" },
    ],
  };
  const QA = {
    main_img: "/QA.webp",
    title: "Quality Assurance (QA)",
    inner_text:
      "Explore our user-friendly and seamless website and app development services, designed for easy management.",
    tech_Details: [
      { img: "/Selenium.svg", name: "Selenium" },
      { img: "/KatalonStudio.webp", name: "Katalon Studio" },
      { img: "/Testsigma.svg", name: "Testsigma" },
      { img: "/TelerikTestStudio.webp", name: "Telerik Test Studio" },
    ],
  };
  const digitalMarketing = {
    main_img: "/digitalService.webp",
    title: "Digital Marketing",
    inner_text:
      "Leverage our digital marketing services to achieve outstanding sales conversions and maximise ROI.",
    tech_Details: [
      { img: "/metaLogo.svg", name: "Meta" },
      { img: "/analytics.svg", name: "Analytics" },
      { img: "/ads.svg", name: "Google Ads" },
      { img: "/growth.svg", name: "Growth" },
    ],
  };

  const [liItems, setLiItems] = useState([
    webService,
    mobileService,
    graphicDesign,
    uiux,
    QA,
    digitalMarketing,
  ]);

  return (
    <section className="serviceSection">

      <div className="container">
        <div>
        <div className="sectionTitle">
          <h2 className="container p-0" style={{padding:"0px"}}>Services We Offer</h2>
        </div>
        <p>
          We offer a full range of web app development services that make things
          better for enterprises and companies we work with. Our team of
          dedicated mobile app developers fulfils your diverse business
          requirements through a number of services. We specialise in the
          following services:
        </p>
        </div>
      <div className="mt-20 sm:mt-10 w-full">
        <ul className="servicesSection">
            {liItems.map((item,index)=>(
                <li key={index} className="liclass">
                <a>
                  <div className="content-left">
                    <div className="content-img">
                      <img
                        alt="web"
                        loading="lazy"
                        width="55"
                        height="55"
                        decoding="async"
                        data-nimg="1"
                        src={item.main_img}
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="content-services">
                      <h3 className="text-2xl">{item.title}</h3>
                      <div className="serviceDesc">{item.inner_text}</div>
                    </div>
                  </div>
                </a>
                <div className="content-serviceImgs">
                  <div className="serviceImgBox">
                    <img
                      alt="react"
                      loading="lazy"
                      width="50"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      src={item.tech_Details[0].img}
                      style={{color: "transparent"}}
                    />
                    <div className="imgName">{item.tech_Details[0].name}</div>
                  </div>
                  <div className="serviceImgBox">
                    <img
                      alt="react"
                      loading="lazy"
                      width="50"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      src={item.tech_Details[1].img}
                      style={{color: "transparent"}}
                    />
                    <div className="imgName">{item.tech_Details[1].name}</div>
                  </div>
                  <div className="serviceImgBox">
                    <img
                      alt="react"
                      loading="lazy"
                      width="50"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      src={item.tech_Details[2].img}
                      style={{color: "transparent"}}
                    />
                    <div className="imgName">{item.tech_Details[2].name}</div>
                  </div>
                  <div className="serviceImgBox">
                    <img
                      alt="react"
                      loading="lazy"
                      width="50"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      src={item.tech_Details[3].img}
                      style={{color: "transparent"}}
                    />
                    <div className="imgName">{item.tech_Details[3].name}</div>
                  </div>
                </div>
                <a aria-label="Web Development" href="/web-development-company"><div className="content-arrow"><svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9791 8.55562C21.3696 8.16509 21.3696 7.53193 20.9791 7.1414L14.6152 0.777442C14.2246 0.386917 13.5915 0.386917 13.2009 0.777442C12.8104 1.16797 12.8104 1.80113 13.2009 2.19166L18.8578 7.84851L13.2009 13.5054C12.8104 13.8959 12.8104 14.5291 13.2009 14.9196C13.5915 15.3101 14.2246 15.3101 14.6152 14.9196L20.9791 8.55562ZM0.726563 8.84851L20.272 8.84851L20.272 6.84851L0.726562 6.84851L0.726563 8.84851Z" fill="white"></path></svg></div></a>
              </li>
            ))}
          
        </ul>
      </div>
      </div>

    </section>
  );
}

export default ServiceSection;
