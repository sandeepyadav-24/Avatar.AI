import VideoGenPoster from "./VideoGenPoster";
import { useState } from "react";
const VideoGenBanner = () => {
  const [value, setValue] = useState("");
  const [prompt, setPrompt] = useState("");
  const [time, setTime] = useState("");
  const [audioSrc, setAudioSrc] = useState(""); // State to store audio sourceconst [audioSrc, setAudioSrc] = useState(""); // State to store audio source
  const generate = async () => {
    try {
      setPrompt(value);
      //alert(prompt);
      console.log(prompt);
      const response = await fetch("http://localhost:3000/video/script", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ prompt, time }),
      });
      if (response.ok) {
        // Assuming the response is a Blob containing audio data
        const audioBlob = await response.arrayBuffer();
        const audioUrl = URL.createObjectURL(
          new Blob([audioBlob], { type: "audio/mpeg" })
        );
        setAudioSrc(audioUrl);
      } else {
        console.error("Error fetching audio:", response.statusText);
      }
    } catch (error) {
      // ERROR
    } finally {
      //setLoading(false); // Set loading to false regardless of success or failure
    }
  };
  return (
    <div className="w-2/5 bg-white m-2 px-5 py-3 rounded-xl">
      <VideoGenPoster />
      <div>
        <h1>Project Details </h1>
        <textarea
          className="w-[500px] h-[400px] p-3 border-black border-[1px] rounded-xl my-5"
          onChange={(e) => setValue(e.target.value)}
        />
        <h1>Time Duration ( in sec )</h1>
        <input
          className="border-black border-[1px] rounded-sm px-3 py-2"
          type="number"
          onChange={(e) => setTime(e.target.value)}
        />
        <button
          onClick={generate}
          className="bg-blue-600 p-2 rounded-xl text-white"
        >
          Generate Video
        </button>
        {/* Render audio player if audio source is available */}
        {audioSrc && (
          <div>
            <h2>Generated Audio</h2>
            <audio controls>
              <source src={audioSrc} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoGenBanner;
