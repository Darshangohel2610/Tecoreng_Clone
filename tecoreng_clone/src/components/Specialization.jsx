import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Our web team creates high-quality websites as per custom requirements and helps to make your business digital. Tecoreng web experts to continue growing themself to the latest fair with technology such as Laravel, Angular, Node.Js, and so on.",
    svg: "/web.svg",
  },
  {
    id: 2,
    title: "UI/UX Graphics & Design",
    description:
      "Tecoreng is the best UI/UX graphics design agency. We have the capacity to build a smooth and high-quality design with our UI/UX team.",
    svg: "/uiux.svg",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Technical Core Engineers is a Digital organization that incorporates administrations from making your Brand character through carefully characterizing your thoughts and zeroing in on getting your items and administrations to the consistently developing computerized market subsequently expanding your image’s mindfulness, deals, and wants.",
    svg: "/digitalMarketing.svg",
  },
  {
    id: 4,
    title: "Internet Of Things",
    description:
      "Web of Things(IoT) application advancement interfaces each and every actual device with the Internet to engage an exchange of data. It will in general be energized through different connection points and devices to make life favorable.",
    svg: "/iot.svg",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description:
      "Tecoreng is the top mobile application development company in India. Our expert team of mobile application developers is capable of creating high-quality mobile apps for multiple platforms like IOS & Android.",
    svg: "/mobile.svg",
  },
];

const Specialization = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
  const nextIndex = (currentIndex + 1) % cards.length;
  const hiddenLeftIndex = (currentIndex - 2 + cards.length) % cards.length;
  const hiddenRightIndex = (currentIndex + 2) % cards.length;

  const handleCardClick = (direction) => {
    if (direction === "left") {
      setCurrentIndex(prevIndex);
    } else if (direction === "right") {
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <section className="specializationSection">
      <div className="container">
        <div>
        <div className="sectionTitle">
          <h2 className="container p-0" style={{padding:"0px"}}>Our Specialization</h2>
        </div>
          <p className="specialP">
            We offer a full range of web app development services that make
            things better for enterprises and companies we work with. Our team
            of dedicated mobile app developers fulfils your diverse business
            requirements through a number of services. We specialize in the
            following services:
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full h-[500px]  mx-auto md:h-[300px] my-4">
            <div className="relative w-full h-full">
              <div
                className="specializationBox absolute left-0 opacity-25 z-0 scale-[0.5] -translate-y-1/2 -translate-x-1/4"
                onClick={() => handleCardClick("left")}
                transition={{ duration: 0.5 }}
              >
                <div className="flex relative justify-center">
                  <Card {...cards[prevIndex]} />
                </div>
              </div>

              <div
                className="specializationBox absolute left-1/2 opacity-100 z-10 scale-100 -translate-x-1/2 -translate-y-1/2"
                transition={{ duration: 0.5 }}
              >
                <div className="flex relative justify-center">
                  <Card {...cards[currentIndex]} />
                </div>
              </div>

              <div
                className="specializationBox absolute left-full opacity-25 z-0 scale-[0.5] -translate-x-3/4 -translate-y-1/2"
                onClick={() => handleCardClick("right")}
                transition={{ duration: 0.5 }}
              >
                <div className="flex relative justify-center">
                  <Card {...cards[nextIndex]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, description, svg }) => {
  return (
    <div className="whiteBox">
      <img src={svg} ></img>
      <h3 className="whiteBoxH3">{title}</h3>
      <div className="whiteBoxDesc">{description}</div>
    </div>
  );
};

export default Specialization;
