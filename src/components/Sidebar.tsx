import React from "react";

interface SidebarProps {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  height: number;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  startTime: number;
  setStartTime: React.Dispatch<React.SetStateAction<number>>;
  endTime: number;
  setEndTime: React.Dispatch<React.SetStateAction<number>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  playTime: number;
  setPlayTime: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  setFile,
  width,
  setWidth,
  height,
  setHeight,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  isPlaying,
  setIsPlaying,
  playTime,
  setPlayTime
}) => {
  return (
    <div className="sidebar p-4 bg-gray-800 text-white w-64 h-full">
      <h2 className="text-lg font-bold mb-4">Media Controls</h2>
      
      {/* Upload Media */}
      <label className="block mb-2">Upload Media:</label>
      <input
        type="file"
        accept="image/*,video/*"
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
        className="mb-4 w-full p-2 border rounded"
      />
      
      {/* Width Control */}
      <label className="block mb-2">Width:</label>
      <input
        type="number"
        value={width}
        onChange={(e) => setWidth(Number(e.target.value))}
        className="mb-4 w-full p-2 border rounded"
      />
      
      {/* Height Control */}
      <label className="block mb-2">Height:</label>
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(Number(e.target.value))}
        className="mb-4 w-full p-2 border rounded"
      />
      
      {/* Start Time Control */}
      <label className="block mb-2">Start Time (seconds):</label>
      <input
        type="number"
        value={startTime}
        onChange={(e) => setStartTime(Number(e.target.value))}
        className="mb-4 w-full p-2 border rounded"
      />
      
      {/* End Time Control */}
      <label className="block mb-2">End Time (seconds):</label>
      <input
        type="number"
        value={endTime}
        onChange={(e) => setEndTime(Number(e.target.value))}
        className="mb-4 w-full p-2 border rounded"
      />
      
      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Sidebar;
