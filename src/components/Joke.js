import React, { useState, useEffect } from "react";
import axios from "axios";
import Gify from "./Gify";

export default function Joke() {
  const [joke, setJoke] = useState("");
  const [gify, setGify] = useState("");

  useEffect(() => {
    fetchJoke();
    fetchGify();
  }, []);

  const fetchJoke = () => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      .then((res) => setJoke(res.data))
      .catch((err) => console.log(err));
  };

  const fetchGify = () => {
    axios
      .get(
        "http://api.giphy.com/v1/gifs/random?api_key=H8wC9dJwVgTZtuFdoWeEdCl86csBS6Rw&tag=laugh",
        {
          headers: { Accept: "application/json" },
        }
      )
      .then((res) => {
        setGify(res.data.data.image_url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-4">
      <div className="text-center">
        <p className="card-text">{joke.joke}</p>
        <a
          className="btn btn-primary text-white center"
          onClick={() => {
            fetchJoke();
            fetchGify();
          }}
        >
          NEXT
        </a>
        <Gify gify={gify} />
      </div>
    </div>
  );
}
