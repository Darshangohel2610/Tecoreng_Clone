import React from "react";

function WhoWeAre() {

  const whyTCE = [
    {imgSrc : "/p1.webp",title:"Report & Analysis"},
    {imgSrc : "/p2.webp",title:"On-Time Delivery"},
    {imgSrc : "/p3.webp",title:"Seamless Communication"},
    {imgSrc : "/p4.webp",title:"Post Launch Support"},
    {title:"Agile Methodology"},
    {title:"Certified Experts"},
    {title:"Budget Friendly"},
    {title:"100% Client Expectation"},
  ]
  return (
    <section className="whoWeAre">
      <div className="container">
        <div>
          <div className="outlineTitle">
            <h2>Why Tecoreng for your next project</h2>
          </div>
          <p className="w-[80%] leading-8 mt-[37px] mb-[25px]">
            Introducing Technical Core Engineers (TCE), the intersection of
            technology and innovation. At TCE, we excel in delivering
            exceptional IT services customized to fulfill your development
            requirements. Harnessing our expertise and enthusiasm, we breathe
            life into your ideas. Backed by a team of seasoned developers with
            extensive knowledge in various programming technologies, our
            dedication is unwavering, ensuring the delivery of outstanding
            results. Our mission is straightforward: decode the language of
            binary and transform it into extraordinary digital solutions that
            empower your business.
          </p>
          <a href="#">
            <button className="pushable">
              <span className="front">Get In Touch</span>
            </button>
          </a>
          <div className="pt-16">
            <div className="gap-y-[60px] gap-x-8 grid grid-cols-2 sm:grid-cols-4">
            {whyTCE.map((item,index)=>(
               <div key={index} className="flex justify-center items-center h-32 p-8 whoWeAreItems">
                  <div className="flex items-center flex-col text-center">
                       <div className="imgBlock">
                        {item.imgSrc ?
                         <img alt="Reporting &amp; Analysis" loading="lazy" width="56" height="53" decoding="async" data-nimg="1" style={{color:"transparent",height:"auto"}} src={item.imgSrc}/>:null}
                       </div>
                       <div className="pt-1.5">{item.title}</div>
                   </div>

               </div>

            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
