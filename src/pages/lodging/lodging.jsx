import { useEffect } from "react";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slideshow from "../../components/slideshow/Slideshow";
import Host from "../../components/host/Host";
import Rating from "../../components/rating/Rating";
import Tags from "../../components/tags/Tags";
import Collapse from "../../components/collapse/Collapse";
import lodgings from "../../data/lodging.json";

function Lodging() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lodging = lodgings.find((item) => item.id === id);

  useEffect(() => {
    if (!lodging) {
      navigate("*");
    }
  }, [lodging, navigate]);

  if (!lodging) {
    return null;
  }

  const equipmentList = lodging.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <main>
      <Slideshow pictures={lodging.pictures} />
      <div className="group title-host">
        <div className="lodging-title">
          <h1>{lodging.title}</h1>
          <p>{lodging.location}</p>
        </div>
        <Host host={lodging.host} />
      </div>
      <div className="group tags-rating">
        <Tags tags={lodging.tags} />
        <Rating rating={lodging.rating} />
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