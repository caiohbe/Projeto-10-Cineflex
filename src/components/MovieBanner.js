import styled from "styled-components"
import { Link } from "react-router-dom"

export default function MovieBanner({ movie }) {
    return (
        <Link to={`/sessoes/${movie.id}`} key={movie.id}>
            <Movie >
                <img src={movie.posterURL} alt={movie.title} />
            </Movie>
        </Link>
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