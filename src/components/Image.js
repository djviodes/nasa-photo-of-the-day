import React from "react";
import Explanation from "./Explanation";
import styled from 'styled-components'

const StyledImg = styled.img`
    border: 5px solid ${props => props.theme.secondaryColor};
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
        border: 5px solid ${props => props.theme.primaryColor};
    }
`

const Image = props => {
    const {image, title, para} = props;

    return (
        <div className='image-container'>
            <StyledImg src={image} alt={title}></StyledImg>
            <Explanation para={para} />
        </div>
    )
}

export default Image;