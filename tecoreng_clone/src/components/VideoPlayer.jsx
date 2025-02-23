import React, { useRef } from 'react'

function VideoPlayer() {
    const videoRef = useRef(null); // Reference to the video element

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }

      // Enable video controls & play the video
      videoRef.current.controls = true;
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

return (
    <section>
      <div className="container flex">
        <div className="relative w-full max-w-full my-5 overflow-hidden">
          <video
            onClick={handleFullScreen}
            ref={videoRef}
            muted
            autoPlay
            loop

            src="/Tecoreng_vid.mp4"
            className="h-auto w-full rounded-[15px] md:rounded-4xl"
            onEnded={handleVideoEnd} // Exit full screen when video ends
          ></video>

          {/* Play Button */}
          <span
            className="absolute bottom-5 right-5 h-[60px] w-[60px] md:bottom-9 md:right-9 md:h-[100px] md:w-[100px] flex justify-center items-center p-6 rounded-full bg-gradient-to-r from-[#03142e] to-[#223d65] cursor-pointer"
             // Trigger full screen mode
          >
            <img
              src="/playButton.svg"
              alt="play"
              loading="lazy"
              width="34"
              height="34"
              decoding="async"
            />
          </span>
        </div>
      </div>
    </section>
)
}

export default VideoPlayer