import React from "react";

import { useState } from "react";

const cities = {
  Delhi: [
    { name: "Qutub Minar", rating: "4/5" },
    { name: "Red Fort", rating: "4.5/5" }
  ],

  Hyderabad: [
    {
      name: "Inorbit Mall",
      rating: "3/5"
    },
    {
      name: "Charminar",
      rating: "4.5/5"
    }
  ],
  Bangalore: [
    {
      name: "Mysore Palace",
      rating: "3.5/5"
    },
    {
      name: "UB City Mall",
      rating: "3/5"
    }
  ],
  Vizag: [
    {
      name: "Rushikonda Beach",
      rating: "4/5"
    },
    {
      name: "CMR Central Mall",
      rating: "3/5"
    }
  ]
};

export default function App() {
  const [selectedCity, setCity] = useState("Delhi");
  function cityClickHandler(city) {
    setCity(city);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "red" }}> Places of India </h1>
      <p style={{ fontSize: "large", backgroundColor: "blueviolet" }}>
        {" "}
        Know the major places from the happening cities of India{" "}
      </p>

      <div>
        {Object.keys(cities).map((city) => (
          <button
            onClick={() => cityClickHandler(city)}
            style={{
              cursor: "pointer",
              background: "green",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {city}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {cities[selectedCity].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {place.name} </div>
              <div style={{ fontSize: "smaller" }}> {place.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
