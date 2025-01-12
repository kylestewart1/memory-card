import { useEffect, useState } from "react";
import "../styles/Card.css"

const apiBaseUrl = "https://dragonball-api.com/api/characters/";

export default function Card({ id, onClick }) {
  const url = apiBaseUrl + id;
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
    })
      .catch(error => console.error(error));
  })

  return ( data.length === 0 ? null :
    <button 
      className="card" 
      onClick={() => onClick(id)}
    >
      <img src={data.image}/>
      <h2>{data.name}</h2>
    </button>
  )
}