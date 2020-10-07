import React from "react";

const Explanation = props => {
    const {para} = props;

    return (
        <div className='explanation-container'>
            <p>{para}</p>
        </div>
    )
}

export default Explanation;