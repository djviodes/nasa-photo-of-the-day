import React from "react";
import styled from 'styled-components'

const StyledHeader = styled.h1`
    color: ${props => props.theme.primaryColor};
    padding-bottom: ${props => props.theme.padding.xlarge};
    &:hover{
        color: ${props => props.theme.secondaryColor};
    }
`

const Title = props => {
    const {title} = props;

    return (
        <div className='title-container-wrapper'>
            <StyledHeader className='title'>{title}</StyledHeader>
        </div>
    )
}

export default Title;