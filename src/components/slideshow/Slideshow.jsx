import React from "react"
import { useState } from "react"


function Slideshow({pictures}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    if (!pictures || pictures.length === 0) {
        return <p className="error-message">Aucune image disponible</p>;
      }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slideshow">
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} className="slide" />
            <button className="previous" onClick={prevSlide}>
                <img src="/slide-previous.png" alt="flèche précédent"/>
            </button>
            <button className="next" onClick={nextSlide}>
                <img src="/slide-next.png" alt="flèche suivant" />
            </button>
        </div>
    )
}

export default Slideshow