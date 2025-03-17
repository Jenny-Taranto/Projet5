import React from "react"
import { useParams } from "react-router-dom";
import Slideshow from "../../components/slideshow/Slideshow"
import Host from "../../components/host/Host"
import Rating from "../../components/rating/Rating"
import Tags from "../../components/tags/Tags"
import Collapse from "../../components/collapse/Collapse"
import lodgings from "../../data/lodging.json"

function Lodging() {
  const { id } = useParams();
  const lodging = lodgings.find((item) => item.id === id);
  if (!lodging) {
    return <p>Le logement n'a pas été trouvé.</p>;
  }

  return (
    <>
      <main>
        <Slideshow pictures={lodging.pictures} />
        <div className="group">
          <div className="lodging-title">
            <h1>{lodging.title}</h1>
            <p>{lodging.location}</p>
          </div>
          <Host host={lodging.host} />
          <Tags tags={lodging.tags} />
          <Rating rating={lodging.rating} />
          <div>
            <Collapse title="Description" text={lodging.description} />
            <Collapse title="Equipements" text={lodging.equipments} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Lodging