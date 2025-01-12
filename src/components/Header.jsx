import "../styles/Header.css";
import Score from "./Score";

export default function Header({ currentScore, highestScore }) {
  return (
    <div className="header">
      <h1>
        <span className="left yellow">Drag</span><span className="dragon-ball-o">o</span><span className="right yellow">n</span>
        <span className="right red">Ball </span>
        <span className="left yellow">Mem</span><span className="dragon-ball-o">o</span><span className="right yellow">ry </span>
        <span className="right red">Game</span></h1>
      <p>Click each character exactly one time!</p>
      <Score text={"Score"} value={currentScore} />
      <Score text={"Highest Score"} value={highestScore} />
    </div>
  )
}