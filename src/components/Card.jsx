import { useEffect, useState } from "react";
import "../styles/Card.css"

const apiBaseUrl = "https://dragonball-api.com/api/characters/";

export default function Card({ id, onClick }) {
  const url = apiBaseUrl + id
  const [image, setImage] = useState("");
  const [characterName, setCharacterName] =  useState("");

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setImage(data.image);
        setCharacterName(data.name)
    })
  })

  return (
    <button className="card" onClick={() => onClick(id)}>
      <img src={image}/>
      <h2>{characterName}</h2>
    </button>
  )
}