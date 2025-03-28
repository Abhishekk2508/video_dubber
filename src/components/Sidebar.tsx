import React from "react";

interface SidebarProps {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  height: number;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  playTime: number;
  setPlayTime: React.Dispatch<React.SetStateAction<number>>;
  startTime: number;
  setStartTime: React.Dispatch<React.SetStateAction<number>>;
  endTime: number;
  setEndTime: React.Dispatch<React.SetStateAction<number>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  setFile,
  width,
  setWidth,
  height,
  setHeight,
  playTime,
  setPlayTime,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  isPlaying,
  setIsPlaying,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-1/4 p-4 bg-gray-800 text-white">
      <h2 className="text-xl font-semibold">Sidebar</h2>
      <input type="file" onChange={handleFileChange} />
      <div className="mt-4">
        <label>Width:</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          className="border p-1 mx-2"
        />
      </div>
      <div className="mt-4">
        <label>Height:</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          className="border p-1 mx-2"
        />
      </div>

      <div className="mt-4">
        <label>Start Time:</label>
        <input
          type="number"
          value={startTime}
          onChange={(e) => setStartTime(Number(e.target.value))}
          className="border p-1 mx-2"
        />
      </div>

      <div className="mt-4">
        <label>End Time:</label>
        <input
          type="number"
          value={endTime}
          onChange={(e) => setEndTime(Number(e.target.value))}
          className="border p-1 mx-2"
        />
      </div>

      <div className="mt-4">
        <button
          onClick={handlePlayPause}
          className="bg-blue-500 px-4 py-2 text-white rounded"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      <div className="mt-4">
        <p>Play Time: {playTime.toFixed(2)} sec</p>
      </div>
    </div>
  );
};

export default Sidebar;
