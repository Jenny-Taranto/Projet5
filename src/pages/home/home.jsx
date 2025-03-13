import React from "react"
import Banner from "../../components/banner/Banner"
import Card from "../../components/card/Card"
import lodgings from "../../data/lodging.json"


function Home() {
  return (
      <main>
        <Banner />
        <div className="gallery">
          {lodgings.map(lodging => (
            <Card key={lodging.id} image={lodging.cover} title={lodging.title} />
          ))}
        </div>
      </main>
  );
};

export default Home