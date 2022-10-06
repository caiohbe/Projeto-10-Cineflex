import Footer from "./Footer"; 
import styled from "styled-components";

export default function SelectSeatPage() {
    return (
        <>
            <Select>Selecione o(s) acento(s)</Select>
            <Rows>
                <Row>
                    <Seat></Seat> 
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                </Row>
                <Row>
                    <Seat></Seat> 
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                </Row>
            </Rows>

            <Info>
                <Selected></Selected>
                <Unavailable></Unavailable>
                <Available></Available>
            </Info>
            <Info>
                <p>Selecionado</p>
                <p>Disponível</p>
                <p>Indisponível</p>
            </Info>

            <Inputs>
                <p>Nome do comprador: </p>
                <input placeholder='Digite seu nome...' type={'text'}></input>
                <p>CPF do comprador: </p>
                <input placeholder='Digite seu  CPF...' type={'text'}></input>
            </Inputs>

            <Button>Reservar assento(s)</Button>

            <Footer />
        </>
        
    )
}

const Button = styled.button`
    width: 225px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: #E8833A;
    border: 0px;
    border-radius: 3px;
    color: #FFFFFF;
    font-size: 18px;
    margin-top: 55px;

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

const Rows = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
`

const Row = styled.div`
    width: 88%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-shrink: 0;
    margin-bottom: 18px;
`

const Seat = styled.div`
    width: 7vw;
    height: 7vw;
    background-color: red;
    border-radius: 100%;
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

const Selected = styled.div`
    width: 7vw;
    height: 7vw;
    background-color: #1AAE9E;
    border: 1px solid #0E7D71;
    border-radius: 100px;
`

const Unavailable = styled.div`
    width: 7vw;
    height: 7vw;
    background-color: #C3CFD9;
    border: 1px solid #7B8B99;
    border-radius: 100px;

`
const Available = styled.div`
    width: 7vw;
    height: 7vw;
    background-color: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 100px;
`

