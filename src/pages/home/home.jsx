import React from "react"
import Banner from "../../components/banner/Banner"
import Card from "../../components/card/Card"
import lodgings from "../../data/lodging.json"
import { Link } from "react-router-dom"



function Home() {
  return (
    <main>
      <div clasName="home-banner">
        <Banner url="src/assets/IMG.png" title="Chez vous, partout et ailleurs" />
      </div>
      <div className="gallery">
        {lodgings.map(lodging => (
          <Link key={lodging.id} to={`/lodging/${lodging.id}`} >
            <Card key={lodging.id} image={lodging.cover} title={lodging.title} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home