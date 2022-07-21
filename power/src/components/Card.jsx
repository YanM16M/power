import React, {useState} from 'react'
import '../styles/Card.css'

function Card({title, img, description}) {
    const [selected, setSelected] = useState(false);

    return ( 
        <div className={selected ? "card_container selected" : "card_container"} onClick={() => setSelected(!selected)}>
            <div className="shadow"></div>
            <span className="card_title">{title}</span>
            {img && <img src={img} alt="" />}
            <p className="card_description">{description}</p>
        </div>
     );
}

export default Card;