import React from "react";

function SuccessStories() {
  const portfolio = [
    {
      thumb: "/thumb1.webp",
      vid: "/BettingPlatform_1.mp4",
      title: "Betting Platform",
      disc: "Tecoreng's Online Betting Platform revolutionizes how enthusiasts engage with betting, offering seamless experiences across sports, esports, casino games, and more.",
    },
    {
      thumb: "/thumb2.webp",
      vid: "/vid2.mp4",
      title: "Health and Wellness",
      disc: "Excitement fills the air as we proudly unveil our Health and Wellness Platform—a pivotal portal toward maximizing your health journey.",
    },
    {
      thumb: "/thumb3.webp",
      vid: "/vid3.mp4",
      title: "An E - Commerce",
      disc: "Delve into the world of our custom-designed Ecommerce Platform, a true testament to Tecoreng's meticulous craftsmanship.",
    },
  ];
  return (
    <section className="container">
      <div>
        <div className="sectionTitle">
          <h2 className="container p-0" style={{padding:"0px"}}>Our Success Stories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolio.map((item, index) => (
            <div className="portfolio-box group" key={index}>
              <a href="" >
                <div className="portfolio-box-story flex flex-col gap-3">
                  <div className="portfolio-box-img">
                    <img
                      alt="Betting Platform"
                      loading="lazy"
                      width="360"
                      height="341"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      className="visible group-hover:hidden"
                      src={item.thumb}
                    />
                      <video src={item.vid} loop muted autoPlay style={{height:"100%",width:"100%"}} className='hidden object-cover group-hover:block'></video>
                  </div>
                  <div className="portfolio-box-detail-stories">
                    <div className="portfolio-box-detail-title">
                      <h3 className=" text-[18px] sm:text-[22px]">{item.title}</h3>
                    </div>
                    <div className="portfolio-box-detail-stories-desc">
                      {item.disc}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
