import { React, useState } from "react";
import people from "./data";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/all"

const Review = () => {
    const [index, setIndex] = useState(0);
    const { id, name, job, image, text } = people[index];

    function prevBtn() {
            if (index > 0) {
                setIndex(index-1);
            }
            else if (index == 0){
                setIndex(people.length - 1);
            }
    }

    function nextBtn() {
        setIndex((index+1) % people.length);
    }

    return (
        <>
            <article className="review">
                <div className="img-container">
                    <img src={image} alt={name} className="person-img" />
                    <span className="arrow">
                        <FaQuoteRight />
                    </span>
                </div>
                <h4 className="author">{name}</h4>
                <p className="job">{job}</p>
                <p className="info">{text}</p>
                <button className="prev-btn" onClick={prevBtn}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextBtn}>
                    <FaChevronRight />
                </button>
            </article>
        </>
    );
};

export default Review;