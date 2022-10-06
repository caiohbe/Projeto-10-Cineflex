import styled from "styled-components"

export default function MovieBanner({movie}) {
    return (
        <Movie >
            <img src={movie.posterURL} alt="" />
        </Movie>
    )
}

const Movie = styled.div`
    height: 209px;
    width: 145px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    margin-bottom: 11px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 193px;
    }
`