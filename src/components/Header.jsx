import "../styles/Header.css";
import Score from "./Score";

export default function Header({ score, highestScore }) {
  return (
    <div className="header">
      <h1>Dragon Ball Memory Game</h1>
      <p>Click each character exactly one time!</p>
      <Score text={"Score"} value={score} />
      <Score text={"Highest Score"} value={highestScore} />
    </div>
  )
}