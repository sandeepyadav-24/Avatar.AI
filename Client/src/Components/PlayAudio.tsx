import React, { useState } from "react";

const PlayAudio = ({ audioUrl }) => {
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById("audio");
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <div>
      <audio id="audio" src={audioUrl} />
      <button onClick={togglePlay}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default PlayAudio;
