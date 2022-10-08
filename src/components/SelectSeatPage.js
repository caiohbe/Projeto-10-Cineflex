import Footer from "./Footer"; 
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import loading from '../assets/loading.gif'
import FinishOrder from "./FinishOrder";


export default function SelectSeatPage({name, setName, cpf, setCpf, seatNumbers, setSeatNumbers}) {
    const [banner, setBanner] =  useState(<img src={loading} alt='banner' />)
    const [title, setTitle] = useState('')
    const [sessionTime, setSessionTime] = useState('')

    const {idSessao} = useParams()

    const [seatsArray, setSeatsArray] = useState([])
    const [selectedSeats, setSelectedSeats] = useState([])

    useEffect(() => {
        axios
        .get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        .then((session) => {
            setBanner(<img src={session.data.movie.posterURL} alt='poster'/>)
            setTitle(session.data.movie.title)
            setSessionTime(`${session.data.day.weekday} - ${session.data.name}`)

            setSeatsArray(session.data.seats.map((s) => {

                return (
                    <Seat
                        onClick={() => {selectSeat(s.id, s.isAvailable, s.name)}}
                        key={s.id} 
                        className={!s.isAvailable ? 'unavailable' : selectedSeats.includes(s.id) ? 'selected' :'available'}>{s.name}
                    </Seat>
                )
            }))

            function selectSeat(id, isAvailable, name) {
                if (selectedSeats.includes(id)) {

                    setSelectedSeats(selectedSeats.filter((s) => {
                        if(s !== id) {
                            return s
                        }
                    }))

                } else if (!selectedSeats.includes(id) && isAvailable) {
                    setSelectedSeats([...selectedSeats, id])
                    setSeatNumbers([...seatNumbers, name])
                    console.log(selectedSeats)
                }
            }

        })
        .catch((err) => {
            console.log(err.message)
        })  

    }, [selectedSeats])

    return (
        <SelectSeat>
            <Select>Selecione o(s) acento(s)</Select>
            <Seats>
                    {seatsArray}
            </Seats>

            <Info>
                <Seat className="selected"></Seat >
                <Seat className="available"></Seat >
                <Seat className="unavailable"></Seat >
            </Info>
            <Info>
                <p>Selecionado</p>
                <p>Disponível</p>
                <p>Indisponível</p>
            </Info>

            <Inputs>
                <p>Nome do comprador: </p>
                <input onChange={(e) => setName(e.target.value)} placeholder='Digite seu nome...' type={'text'}></input>
                <p>CPF do comprador: </p>
                <input onChange={(e) => setCpf(e.target.value)} placeholder='Digite seu  CPF...' type={'text'}></input>
            </Inputs>

            <FinishOrder ids={selectedSeats} name={name} cpf={cpf}/>

            <Footer banner={banner} title={title} sessionTime={sessionTime}/>
        </SelectSeat>
        
    )
}

const SelectSeat = styled.div`
    .selected {
        background-color: #1AAE9E;
        border: 1px solid #0E7D71
    }

    .available {
        background-color: #C3CFD9;
        border: 1px solid #7B8B99
    }

    .unavailable {
        background-color: #FBE192;
        border: 1px solid #F7C52B
    }
`

const Inputs = styled.div`
    margin: auto;
    width: 88%;

    p {
        font-size: 18px;
        line-height: 21px;
        color: #293845;
        margin-bottom: 2px;
    }

    input { 
        width: 100%;
        height: 50px;
        padding-left: 18px;
        font-size: 18px;
        line-height: 21px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-bottom: 10px;

        &:placeholder-shown {
            font-style: italic;
        } 
    }
`

const Seats = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 88%;
    margin: auto;
    justify-content: center;
`

const Seat = styled.div`
    font-size: 73%;
    margin: 1vh 0.7vw;
    width: 7vw;
    height: 7vw;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000
`   

const Select = styled.div`
    font-size: 24px;
    color: #293845;
    text-align: center;
    margin-top: 35px;
    margin-bottom: 10px;
`

const Info = styled.div`
    display: flex;
    justify-content: space-around;

    p {
        color: #4E5A65;
        font-size: 13px;
        line-height: 28px;
        font-weight: 400;
    }
`