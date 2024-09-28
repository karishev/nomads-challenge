import React, { createContext, useContext, useState } from "react";

const AudioPlayerContext = createContext({
  playingSrc: "",
  setPlayingSrc: () => {},
});

export const useAudioPlayerContext = () => useContext(AudioPlayerContext);

export const AudioPlayerProvider = ({ children }) => {
  const [playingSrc, setPlayingSrc] = useState("");

  return (
    <AudioPlayerContext.Provider value={{ playingSrc, setPlayingSrc }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};
