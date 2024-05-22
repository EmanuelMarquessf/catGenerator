import React, { useState, useEffect } from "react";
import CatCard from "./components/CatCard";

import fetchCats from "./hooks/apiUtils";

function App() {

  const [cats, setCats] = useState([]);
  useEffect(() => {
    fetchCats().then((result) => {
      setCats(result);
    });
  }, []);

  const moreCats = () => {
    fetchCats().then((cats) => {
      setCats(cats);
    });
  };

  return (
    <div className="app" style={{display: "flex", flexDirection: "column", margin: '0rem 1rem'}}>
      <h2>Cats</h2>
      <div style={{ display: 'grid', placeItems: 'center'}}>
        <div
          className="catsContainer"
        >
          {cats.map((cat) => (
            <CatCard key={cat.id} name={cat.name} image={cat.url} />
          ))}
        </div>
        <button onClick={moreCats} >New Cats</button>
      </div>
    </div>
  );
}

export default App;
