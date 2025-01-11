import "../styles/Header.css";
import Score from "./Score";

export default function Header({ currentScore, highestScore }) {
  return (
    <div className="header">
      <h1>Dragon Ball Memory Game</h1>
      <p>Click each character exactly one time!</p>
      <Score text={"Score"} value={currentScore} />
      <Score text={"Highest Score"} value={highestScore} />
    </div>
  )
}