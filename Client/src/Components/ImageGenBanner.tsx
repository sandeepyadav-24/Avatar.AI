import { useState } from "react";
import ImageGenPoster from "./ImageGenPoster";

const ImageGenBanner = () => {
  const [value, setValue] = useState("");
  const [prompt, setPrompt] = useState("");
  const [link, setLink] = useState("");

  const generate = () => {
    setPrompt(value);
    // Sending request from Frontend to Backedn
    const imageGeneration = async () => {
      const response = await fetch("http://localhost/image/imageGen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ prompt }),
      });
      if (response.ok) {
        const responseData = await response.json();
        setLink(responseData);
      } else {
        console.error("Error fetching tweets:", response.statusText);
      }
      imageGeneration();
    };
    return (
      <div className="w-2/5 bg-white m-2 px-5 py-3 rounded-xl">
        <ImageGenPoster />
        {link}
        <div>
          <h1>Project Details </h1>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-[500px] h-[500px] p-3 border-black border-[1px] rounded-xl my-5"
          />
          <button
            onClick={generate}
            className="bg-blue-600 p-2 rounded-xl text-white"
          >
            Generate Image
          </button>
        </div>
      </div>
    );
  };
};
export default ImageGenBanner;
