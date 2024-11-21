"use client";

import { useRef, useEffect } from "react";

const VideoPlayer = ({ videoSrc }: { videoSrc: string }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    return () => {
      if (videoRef.current) {
        //videoRef.current.pause(); // Pausar el video
        videoRef.current.currentTime = 0; // Opcional: Reiniciar al principio
      }
    };
  }, []);

  return (
    <div className="flex justify-center">
      <video
        ref={videoRef}
        width={720}
        controlsList="nodownload"
        controls
        loop
        preload="none"
        autoPlay
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
