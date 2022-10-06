import styled from "styled-components"
import axios from 'axios';
import { useEffect, useState } from "react";
import loading from '../assets/loading.gif'
import MovieBanner from './MovieBanner'

export default function SelectMoviePage() {
    const [moviesArray, setMoviesArray] = useState(<img className="loading" src={loading} alt='loading' />)
    
    useEffect(() => {
        axios
        .get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
        .then((movies) => {
            console.log(movies.data)
            setMoviesArray(movies.data.map((movie) => {
                return (
                    <MovieBanner key={movie.id} movie={movie}/>
                )
            }))
        })
    }, [])

    return (
        <>
            <Select>Selecione o filme </Select>
            <Movies>
                {moviesArray}
            </Movies>
        </>
    )
}

const Movies = styled.div`
    .loading {
        width: 50%;
        display: flex;
        margin: auto;
    }
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    margin: auto;
    justify-content: space-around;
`


const Select = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #293845;
`