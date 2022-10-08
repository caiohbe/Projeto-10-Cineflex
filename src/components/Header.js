import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Header({setSeatNumbers}) {
    return (
        <Link to={'/'}>
            <Top onClick={() => setSeatNumbers([])}>CINEFLIX</Top>
        </Link>
        
    )
}

const Top = styled.div`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #E8833A;
    font-size: 34px;
    font-weight: 700;
    text-decoration: underline #C3CFD9;
`