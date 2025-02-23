import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function DevelopmentProcess() {

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".stageboxes",
        start: "top center",
        end: "bottom center ",
        scrub: 2,
        markers: false,
      },
    });
  
    tl.to(".ball img", {
      motionPath: {
        path: [
          { x: 0, y: 0 },       // Start position
          { x: 900, y: 250 },   // Slide 1 (Right-Down)
          { x: 0, y: 520 },     // Slide 2 (Left-Down)
          { x: 900, y: 780 },   // Slide 3 (Right-Down)
          { x: 0, y: 1040 },    // Slide 4 (Left-Down)
          { x: 900, y: 1300 },  // Slide 5 (Right-Down)
          { x: 0, y: 1560 },    // Slide 6 (Left-Down)
          { x: 900, y: 1820 },  // Slide 7 (Right-Down)
          { x: 900, y: 1930 },  // Slide 7 (Right-Down)
          // { x: 0, y: 2200 },    // Final Stop (Left-Down)
        ],
        // curviness: 1.5,
        autoRotate: true, // Ball rotates as it moves
      },
      ease: "power2.inOut",
    });
  }, []);
  
  const development = [
    {
      imgsrc: "/c1.webp",
      title: "Research and Analysis",
      disc: "Idea, Consultation, Research, Goal Definition, & Requirements Gathering",
    },
    {
      imgsrc: "/c2.webp",
      title: "Design",
      disc: "System Architecture Design, Wireframing, UI/UX Designing, & Prototyping",
    },
    {
      imgsrc: "/c3.webp",
      title: "Development",
      disc: "Functional Implementation, Software Coding & Optimization",
    },
    {
      imgsrc: "/c4.webp",
      title: "Testing",
      disc: "Quality Assurance, Troubleshooting, & Testing",
    },
    {
      imgsrc: "/c5.webp",
      title: "Deployment",
      disc: "Launch, Beta Live, & Live",
    },
    {
      imgsrc: "/c6.webp",
      title: "Evaluation",
      disc: "Performance Evaluation, & Analytics Implementation",
    },
    {
      imgsrc: "/c7.webp",
      title: "Maintenance",
      disc: "Monitoring, Feedback, Analysis, & Complete Support",
    },
  ];
  return (
    <section className="developmentprocess">
      <div className="container">
        <div>
          <div className="sectionTitle">
            <h2 className="container p-0" style={{padding:"0px"}}>Our Development Process</h2>
          </div>
          <div className="stageProcess position-relative">
            <div className="ballEntry hidden lg:block">
              <img
                alt="ball entry"
                loading="lazy"
                width="65"
                height="124"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/ballEntry.svg"
              />
              <div className="ball3d hidden lg:block position-absolute">
                <div className="ball top-[5px] left-0">
                  <img
                    alt="Ball"
                    loading="lazy"
                    width="88"
                    height="88"
                    decoding="async"
                    data-nimg="1"
                    className="ball3d"
                    style={{ color: "transparent" }}
                    src="/ballfor2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="stageboxes">
              {development.map((stage, index) => (
                <div
                  key={index}
                  className="developmentSlide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem 0px 0px 1rem",
                    transform: index % 2 === 1 ? "scale(-1, 1)" : "none",
                    marginLeft: index % 2 === 1 ? "auto" : "0",
                  }}
                >
                  <div
                    className={
                      index % 2 === 1
                        ? "flex flex-row-reverse items-center py-4 text-end mr-0"
                        : "flex items-center py-4"
                    }
                    style={{
                      transform: index % 2 === 1 ? "scale(-1, 1)" : "none",
                    }}
                  >
                    <div className="developmentText">
                      <img
                        alt={stage.title}
                        loading="lazy"
                        width="96"
                        height="96"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src={stage.imgsrc}
                      />
                    </div>
                    <div className="mt-4 md:mt-2">
                      <h3 className="pb-2 text-[12px] md:text-[20px] font-medium leading-5">
                        {stage.title}
                      </h3>
                      <p className="w-[160px] md:w-[350px] text-[10px] md:text-[14px]">
                        {stage.disc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}


            </div>
            <img
                alt="ball entry"
                loading="lazy"
                width="209"
                height="83"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent"}}
                src="/ballExit.webp"
                className="hidden lg:block absolute bottom-0 right-[300px] opacity-60"
              />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevelopmentProcess;
