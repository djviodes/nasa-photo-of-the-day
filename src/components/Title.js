import React from "react";

const Title = props => {
    const {title} = props;

    return (
        <div className='title-container-wrapper'>
            <h1 className='title'>{title.title}</h1>
        </div>
    )
}

export default Title;