export default function Score({text, value}) {
  return (
    <span className="score">
      {text}: {value}
    </span>
  )
}