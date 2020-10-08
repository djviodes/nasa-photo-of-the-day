import React from "react";
import styled from 'styled-components'

const StyledParaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledPara = styled.p`
    width: 60%;
    color: ${props => props.theme.black};
    padding-top: ${props => props.theme.padding.xlarge};
`

const Explanation = props => {
    const {para} = props;

    return (
        <StyledParaContainer className='explanation-container'>
            <StyledPara>{para}</StyledPara>
        </StyledParaContainer>
    )
}

export default Explanation;