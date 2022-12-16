import React, {useState, useEffect} from "react";
import axios from "axios";

export default function CatFact () {
  let [catFact, setCatFact] = useState('Cat fact hasn\'t loaded yet!')

  useEffect(() => {
    axios.get(`https://catfact.ninja/fact`)
    .then((response) =>setCatFact(response.data.fact))
    .catch((err) => console.error(err));
  }, [])

  return (
    <div>
      <p>{catFact}</p>
    </div>
  )
}