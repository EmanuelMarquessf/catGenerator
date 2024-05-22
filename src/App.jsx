import React, { useState, useEffect } from "react";
import CatCard from "../components/CatCard";

import fetchCats from "../hooks/apiUtils";

function App() {

  const [cats, setCats] = useState([]);
  useEffect(() => {
    fetchCats().then((result) => {
      setCats(result);
    });
  }, []);

  return (
    <div className="app" style={{display: "flex", flexDirection: "column"}}>
      <h2>Cats</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {cats.map((cat) => (
          <CatCard key={cat.id} name={cat.name} image={cat.url} />
        ))}
      </div>
    </div>
  );
}

export default App;
