import React from "react";
import Explanation from "./Explanation";

const Image = props => {
    const {image, title, para} = props;

    return (
        <div className='image-container'>
            <img src={image} alt={title}></img>
            <Explanation para={para} />
        </div>
    )
}

export default Image;