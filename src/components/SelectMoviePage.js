import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from "react";
import loading from '../assets/loading.gif'

let listafilmes


export default function SelectMoviePage() {
    const [moviesArray, setMoviesArray] = useState(<img src={loading} alt='loading' />)
    useEffect(() => {
        axios
            .get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
            .then((movies) => {
                console.log(movies.data)
                listafilmes = movies.data.map((movie) => {
                    return (
                        <Movie key={movie.id}><img src={movie.posterURL} alt="" /></Movie>
                    )
                })
                setMoviesArray(listafilmes)
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

const Select = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #293845;
`

const Movies = styled.div`
    img { 
        width: 50%;
        display: flex;
        margin: auto;
    }
    display: flex;
    flex-wrap: wrap;
`

const Movie = styled.div`
    height: 209px;
    width: 145px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    margin-left: 28px;
    margin-bottom: 11px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 129px;
        height: 193px;
    }
`