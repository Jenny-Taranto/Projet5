import React from "react"
import Banner from "../../components/banner/Banner"
import Card from "../../components/card/Card"
import lodgings from "../../data/lodging.json"




function Home() {
  return (
      <main>
        <Banner url="src/assets/IMG.png" title="Chez vous, partout et ailleurs" />
        <div className="gallery">
          {lodgings.map(lodging => (
            <Card key={lodging.id} image={lodging.cover} title={lodging.title} />
          ))}
        </div>
      </main>
  );
};

export default Home