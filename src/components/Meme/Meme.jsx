import "./Meme.css";

const Meme = () => {
  return (
    <main className="meme">
      <form className="meme-form">
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
        <button type="submit" className="get-meme-btn">
          Get a new meme image
        </button>
      </form>
    </main>
  );
};

export default Meme;
