import Footer from "./Footer"; 
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import loading from "../assets/loading.gif"

export default function SelectSessionPage() {
    const {idFilme} = useParams()
    const [banner, setBanner] =  useState(<img src={loading} alt='banner' />)
    const [title, setTitle] = useState('')
    const [showtimes, setShowtimes] = useState(<img src={loading} alt='banner' />)

    useEffect(() => {
        axios
        .get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        .then((movie) => {
            setBanner(<img src={movie.data.posterURL} alt="" />)
            setTitle(movie.data.title)

            setShowtimes(movie.data.days.map((e) => { 
                const hoursArray = e.showtimes.map((e) => {
                    return (
                        <Hour key={e.id}>{e.name}</Hour>
                    )
                })

                return (
                    <Session key={e.id}>
                        <p>{e.weekday} - {e.date}</p>
                        <Hours>
                            {hoursArray}
                        </Hours>
                    </Session>
                )
            }))
        })
    }, [])

    return (
        <Content>
            <Select>Selecione o Horário</Select>
            {showtimes}
            <Footer banner={banner} title={title}/>
        </Content>
    )
}

const Content = styled.div`
    margin-bottom: 130px;
    img {
        width: 50%;
        display: flex;
        margin: auto;
    }
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

const Session = styled.div`
    margin-left: 23px;

    p { 
        font-size: 20px;
        color: #293845;
        margin-bottom: 25px;
    }
`

const Hour = styled.div`
    height: 43px;
    width: 83px;
    border-radius: 3px;
    background-color: #E8833A;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 9px;
`

const Hours = styled.div`
    display: flex;
    margin-bottom: 25px;
`