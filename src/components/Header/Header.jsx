import img from "../../images/troll-face.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="meme-generator">
        <img src={img} alt="troll-face" className="troll-face" />
        <h1 className="title">Meme Generator</h1>
      </div>
      <div className="course">
        <h3 className="course-title">React Course - Project 3</h3>
      </div>
    </header>
  );
};

export default Header;
