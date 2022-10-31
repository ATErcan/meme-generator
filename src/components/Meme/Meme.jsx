import "./Meme.css";
import { useEffect, useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/2gnnjh.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);
  // askdnhask

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const getMemeImage = () => {
    const randomImg = allMemes[Math.floor(Math.random() * allMemes.length)].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: randomImg,
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <main className="meme">
      <div className="meme-form">
        <div className="meme-inputs">
          <input
            type="text"
            name="topText"
            className="meme-input-top"
            placeholder="Top Text"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            name="bottomText"
            className="meme-input-bot"
            placeholder="Bottom Text"
            value={meme.bottomText}
            onChange={handleChange}
          />
          <button className="get-meme-btn" onClick={getMemeImage}>
            Get a new meme image
          </button>
        </div>
        <div className="meme-container">
          <img src={meme.randomImage} alt="meme" className="meme-img" />
          <h2 className="top-text">{meme.topText}</h2>
          <h2 className="bot-text">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
};

export default Meme;
