import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [successCounts,SetSuccessCounts] = useState(0)
  const [clintCounts,SetClintCounts] = useState(0)
  const [yearsCounts,SetYearsCounts] = useState(0)

    const interval = setTimeout(()=>{
        if(successCounts < 100) SetSuccessCounts(successCounts+1)

          clearTimeout(interval)

    },20)
    const interval_clint = setTimeout(()=>{
        if(clintCounts < 80) SetClintCounts(clintCounts+1)

          clearTimeout(interval_clint)

    },50)
    
    const interval_year = setTimeout(()=>{
        if(yearsCounts < 9) SetYearsCounts(yearsCounts+1)

          clearTimeout(interval_year)

    },200)
    
    
    

  return (
    <section className="relative pt-5 text-white">
    <div className="container">
      <div className="static bottom-2/9 lg:absolute">
        <h1 className=" text-[36px] lg:text-7xl font-bold w-full lg:w-[600px]">Web & Mobile App Development Company</h1>
        <button className="pushable mt-14 lg:mt-18 "><span className="front">Get Started</span></button>
      </div>
      <div>
        <div className="container p-11 pb-0">
          <img src="/laptop.svg"  alt="laptop svg" />
        </div>
      </div>
    </div>
    <div className="pb-2.5">
      <div className="container">
      <div className="border-2 border-[#00C4D5] rounded-3xl p-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-sm md:text-xl">Successful Projects</div>

              <div className="text-[#00E5FF] text-4xl md:text-6xl font-bold">{successCounts}+</div>
            </div>
            <div className="space-y-2">
            <div className="text-sm md:text-xl">Repeated Client</div>
              <div className="text-[#00E5FF] text-4xl md:text-6xl font-bold">{clintCounts}%</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm md:text-xl">Years in industry</div>
              <div className="text-[#00E5FF] text-4xl md:text-6xl font-bold">{yearsCounts}+</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  );
};

export default HeroSection;
