import styled from 'styled-components'

const WIDTH_BREAK = '700px'

const StyledFlex = styled.div`
    display: flex;
`

const StyledImage = styled.div`
    background-image: url('${props => props.image}');
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;

    @media(max-width: ${WIDTH_BREAK}) {
        display: none;
    }
` 

const StyledContainer = styled.div`
    background-color: ${props => props.theme.white};
    padding: 30px 50px;

    @media (min-width: ${WIDTH_BREAK}){
        width: ${WIDTH_BREAK};
    }
    @media (max-width: ${WIDTH_BREAK}){
        width: 100%;
    }

    display: flex;
    flex-direction: column;

    height: 100vh;
    overflow-y: auto;

    &:before, &:after {
        content: '';
        margin: auto;
    }
`

function ImageWidthSpace({ children, image }) {
    return (
        <StyledFlex>
            <StyledImage image={image} />
            <StyledContainer>
                { children }
            </StyledContainer>
        </StyledFlex>
    )
}

ImageWidthSpace.defaultProps = {
    image: '/coffee-background.jpg'
}

export default ImageWidthSpace