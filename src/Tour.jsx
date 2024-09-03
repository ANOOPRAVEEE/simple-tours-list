import { useState } from "react"


const Tour = ({ id, name, info, image, price, removeTour }) => {

    const [readMore, setReadMore] = useState(true);

    return (
        <article className="single-tour">
            <img src={image} alt="Image" className="img" />
            <span className="tour-price">${price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>
                    {
                        readMore ? info.substring(0, 200) + "..." : info
                    }
                    <button type="button" className="info-btn" onClick={() => setReadMore(!readMore)} >
                        {readMore ? "Read More" : "Read Less"}
                    </button>
                </p>
                <button onClick={() => removeTour(id)} type="button" className="btn btn-block delete-btn">not interested</button>
            </div>
        </article>
    )
}

export default Tour