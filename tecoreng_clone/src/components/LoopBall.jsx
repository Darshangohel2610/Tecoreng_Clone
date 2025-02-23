import React, { useEffect, useState } from "react";

function LoopBall() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible((prev) => !prev);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="loopBallSection py-8">
            <div className="container mx-auto px-4">
                <div className="bg-[#112542] p-6 rounded-lg">
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
                        <div>
                            <h2 className="text-4xl lg:text-6xl mb-5">
                                Transfer your enterprise with digital innovation
                            </h2>
                            <p className="leading-7 mt-2.5 mb-3.5 text-lg lg:text-xl">
                                Your success as a market innovator reflects our strides as a
                                unified partner. Committed to assisting you in attaining
                                excellence through our solutions, we boast a team of adept
                                professionals and dynamic facilitators. Our steadfast
                                commitment to a collaborative strategy, coupled with agile
                                methodologies, propels business expansion. Rely on our
                                strategic insights and development processes, and we will fuel
                                your concepts to manifest as groundbreaking disruptions.
                            </p>
                            <a href="/hire-developer">
                                <button className="pushable">
                                    <span className="front">Hire Now</span>
                                </button>
                            </a>
                        </div>
                        <div className="flex justify-center items-center">
                            <svg
                                viewBox="0 0 1400 800"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-auto"
                            >
                                <image
                                    alt="path"
                                    className="path-image"
                                    width="100%"
                                    height="100%"
                                    x="0"
                                    y="0"
                                    xlinkHref="/loop.webp"
                                ></image>
                                <g id="ball-image">
                                    <image
                                        alt="ball"
                                        className="ball-image"
                                        width="125"
                                        height="125"
                                        x="338"
                                        y="70"
                                        xlinkHref="/ball.webp"
                                    ></image>
                                    <image
                                        alt="front"
                                        id="front-image"
                                        x="0"
                                        y="0"
                                        width="100%"
                                        height="100%"
                                        xlinkHref="/loopsection.webp"
                                        style={{ display: isVisible ? "block" : "none" }}
                                    ></image>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoopBall;
