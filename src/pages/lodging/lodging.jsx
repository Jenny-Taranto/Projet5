import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../../components/slideshow/Slideshow";
import Host from "../../components/host/Host";
import Rating from "../../components/rating/Rating";
import Tags from "../../components/tags/Tags";
import Collapse from "../../components/collapse/Collapse";
import lodgings from "../../data/lodging.json";

function Lodging() {
  const { id } = useParams();
  const lodging = lodgings.find((item) => item.id === id);

  if (!lodging) {
    return <Navigate to="/NotFound" />
  }

  const equipmentList = lodging.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <main className="main-lodging">
      <Slideshow pictures={lodging.pictures} />
      <div className="information">
        <div className="information-main">
          <div className="title-tags">
            <h1>{lodging.title}</h1>
            <p>{lodging.location}</p>
            <Tags tags={lodging.tags} />
          </div>
        </div>
        <div className="information-secondary">
        <Host host={lodging.host} />
          <Rating rating={lodging.rating} />
        </div>
      </div>
      <div className="collapse-section">
        <div className="collapse-container">
          <Collapse title="Description" text={lodging.description} />
        </div>
        <div className="collapse-container">
          <Collapse title="Équipements" text={<ul>{equipmentList}</ul>} />
        </div>
      </div>
    </main>
  );
}

export default Lodging;