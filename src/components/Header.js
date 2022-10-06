import styled from "styled-components"

export default function Header() {
    return (
        <Top>CINEFLIX</Top>
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
`