import { useEffect, useState } from "react";
import "../styles/Card.css"

const apiBaseUrl = "https://dragonball-api.com/api/characters/";

export default function Card({ id, onClick }) {
  const url = apiBaseUrl + id
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setImage(data.image))
  })

  return (
    <button className="card" onClick={onClick}>
      <img src={image}/>
      <p>hi</p>
    </button>
  )
}