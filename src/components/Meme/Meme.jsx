import "./Meme.css";
import { memesData } from "../../helper/memesData";

const Meme = () => {
  const getMemeImage = () => {
    const memesArr = memesData.data.memes;
    console.log(memesArr[Math.floor(Math.random() * memesArr.length)].url);
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
      </div>
    </main>
  );
};

export default Meme;
