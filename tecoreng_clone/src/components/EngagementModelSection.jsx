import React from "react";

function EngagementModelSection() {
    const modelArr = [
        {title:"Hire Full-time Developer", disc:"Looking for committed talent to drive your company's success? Our full-time dedicated developers bring expertise, reliability, and unwavering focus to your projects. With a rigorous selection process, we ensure you get top talent aligned with your goals."},
        {title:"Hire Part-time Developer", disc:"Need flexibility without compromising quality? Our part-time dedicated developers offer the perfect solution. Get skilled assistance on your schedule, ensuring progress without the commitment of a full-time hire."},
        {title:"Professional Services",disc : "Unlock your project's full potential with our professional services. From software development to project management, our experts deliver tailored solutions to drive growth and efficiency, no matter your industry or scale."}
    ]
  return (
    <div className="container">
      <div>
        <div className="sectionTitle">
          <h2 className="container p-0" style={{padding:"0px"}}>Our Flexible Engagement Models</h2>
        </div>
        <p className="discForEngagementMOdel">
          Our team is your partner for the next big digital leap. Our customized
          and highly flexible engagement models are designed to meet business
          objectives. All of our service engagements are focused on customer
          satisfaction, and we ensure that clear communication is maintained
          throughout.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5">
        {modelArr.map((item,index)=>(
                <div className="engegementModelCard" key={index}>
                    <h3 className="engegementModelCardH3">{item.title}</h3>
                    <div className="card-text">
                        <p>{item.disc}</p>
                    </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default EngagementModelSection;
