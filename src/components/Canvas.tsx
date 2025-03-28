import React, { useState, useEffect, useRef } from "react";

interface CanvasProps {
  file: File | null;
  width: number;
  height: number;
  playTime: number;
  setPlayTime: React.Dispatch<React.SetStateAction<number>>;
  startTime: number;
  endTime: number;
  isPlaying: boolean;
  videoRef?: React.RefObject<HTMLVideoElement | null>;
}

const Canvas: React.FC<CanvasProps> = ({
  file,
  width,
  height,
  playTime,
  setPlayTime,
  startTime,
  endTime,
  isPlaying,
  videoRef
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      if (file.type.startsWith("image")) {
        const objectUrl = URL.createObjectURL(file);
        setImageUrl(objectUrl);
      } else {
        setImageUrl(null);
      }
    }
  }, [file]);

  // Handle video playtime control
  useEffect(() => {
    if (isPlaying && videoRef?.current) {
      const video = videoRef.current;
      video.currentTime = startTime;  // Set video start time
      video.play();

      const interval = setInterval(() => {
        if (video.currentTime >= endTime) {
          video.pause();
          setPlayTime(endTime);
        } else {
          setPlayTime(video.currentTime);  // Update play time
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isPlaying, startTime, endTime, videoRef]);

  return (
    <div
      className="canvas"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: "relative",
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      {/* Display the video if it's a video file */}
      {file && file.type.startsWith("video") && (
        <video
          ref={videoRef}
          width={width}
          height={height}
          style={{ objectFit: "contain" }}
          controls
        >
          <source src={URL.createObjectURL(file)} />
        </video>
      )}

      {/* Display the image if it's an image file */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Uploaded Image"
          width={width}
          height={height}
          style={{ objectFit: "contain", display: "block" }}
        />
      )}
    </div>
  );
};

export default Canvas;
