import "./Meme.css";
import { memesData } from "../../helper/memesData";
import { useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topTex: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/2gnnjh.jpg",
  });

  const [allMemeImgaes, setAllMemeImages] = useState(memesData);
  // const [memeImage, setMemeImage] = useState("");

  const getMemeImage = () => {
    const memesArr = memesData.data.memes;
    const randomImg = memesArr[Math.floor(Math.random() * memesArr.length)].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: randomImg,
      };
    });
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
        <img src={meme.randomImage} alt="meme" className="meme-img" />
      </div>
    </main>
  );
};

export default Meme;
