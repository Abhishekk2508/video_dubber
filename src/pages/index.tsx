import React, { useState, useRef, useEffect } from "react";
import Canvas from "../components/Canvas";
import Sidebar from "../components/Sidebar";

const IndexPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(300);
  const [playTime, setPlayTime] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(10);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      const video = videoRef.current;
      video.currentTime = startTime;  // Set video start time
      video.play();

      const interval = setInterval(() => {
        if (video.currentTime >= endTime) {
          video.pause();
          setIsPlaying(false);
          clearInterval(interval);
        } else {
          setPlayTime(video.currentTime);  // Update play time
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isPlaying, startTime, endTime]);

  return (
    <div className="flex h-screen">
      <Sidebar
        setFile={setFile}
        width={width}
        setWidth={setWidth}
        height={height}
        setHeight={setHeight}
        playTime={playTime}
        setPlayTime={setPlayTime}
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      
      <div className="flex-1 flex items-center justify-center bg-gray-200">
        <Canvas
          file={file}
          width={width}
          height={height}
          playTime={playTime}
          setPlayTime={setPlayTime}
          startTime={startTime}
          endTime={endTime}
          isPlaying={isPlaying}
          videoRef={videoRef}
        />
      </div>
    </div>
  );
};

export default IndexPage;
