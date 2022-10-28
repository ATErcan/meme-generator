import "./Meme.css";
import { memesData } from "../../helper/memesData";
import { useState } from "react";

const Meme = () => {
  const [memeImage, setMemeImage] = useState("");

  const getMemeImage = () => {
    const memesArr = memesData.data.memes;
    const randomImg = memesArr[Math.floor(Math.random() * memesArr.length)].url;
    setMemeImage(randomImg);
  };

  return (
    <main className="meme">
      <div className="meme-form">
        <div className="meme-inputs">
          <input
            type="text"
            name=""
            id=""
            className="meme-input-top"
            placeholder="Top Text"
          />
          <input
            type="text"
            name=""
            id=""
            className="meme-input-bot"
            placeholder="Bottom Text"
          />
        </div>
        <button className="get-meme-btn" onClick={getMemeImage}>
          Get a new meme image
        </button>
        <img src={memeImage} alt="meme" className="meme-img" />
      </div>
    </main>
  );
};

export default Meme;
