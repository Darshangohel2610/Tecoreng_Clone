import React from "react";

function ExpertSection() {
return (
    <section className="container">
        <div className="mt-10">
            <div className="sectionTitle">
                <h2 className="container p-0 " style={{padding:"0px"}}>Industries We are experts in</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {["e1.webp", "e2.webp", "e3.webp", "e4.webp", "e5.webp", "e6.webp"].map((src, index) => (
                    <div key={index} className={`relative ${index === 0 || index === 5 ? "col-span-1 sm:col-span-2" : ""} h-[200px] rounded-2xl overflow-hidden`}>
                        <img
                            alt="Industry"
                            loading="lazy"
                            width="531"
                            height="284"
                            decoding="async"
                            data-nimg="1"
                            className="zoom-image rounded-md transform transition-transform duration-300 hover:scale-110"
                            style={{
                                color: "transparent",
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                zIndex: 0,
                            }}
                            src={`/${src}`}
                        />
                        <div className="centered-text absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <h3>{["Supply chain & Logistics", "Healthcare", "Education", "Banking", "E-commerce", "Travel"][index]}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
}

export default ExpertSection;
