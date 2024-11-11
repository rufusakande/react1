import PropTypes from "prop-types"
import styled from "styled-components"
import { useState } from "react"
import Colors from "../../utils/style/Colors"

const CardLabel = styled.span`
    color:${Colors.primaryColor};
    font-size:24px;
`

const CardImg = styled.img`
    width:100px;
    height:100px;
    transform: scale(${({size}) => size})
`
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${Colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
    &:active {
        color:green;
    }
`

function Card({ label, title, picture }) {
    const [size, setSize] = useState(1)
    return (
        <CardWrapper style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span onClick={() =>setSize(size + 0.1)}>{label}</span>
            <CardImg src={picture} alt="freelance" size={size} />
            <CardLabel>{title}</CardLabel>
        </CardWrapper>
    )
}


Card.propTypes = {
    label : PropTypes.string,
    title : PropTypes.string.isRequired,
    picture : PropTypes.string
}

Card.defaultProps = {
    title : "Mon Nom"
}
export default Card