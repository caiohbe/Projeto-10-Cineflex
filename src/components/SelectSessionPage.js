import Footer from "./Footer"; 
import styled from "styled-components";

export default function SelectSessionPage() {
    return (
        <>
            <Select>Selecione o Horário</Select>

            <Session>
                <p>Quinta-feira - 24/06/2021</p>
                <Hours>
                    <Hour>15:20</Hour>
                    <Hour>15:20</Hour>
                </Hours>
            </Session>

            <Session>
                <p>Quinta-feira - 24/06/2021</p>
                <Hours>
                    <Hour>15:20</Hour>
                    <Hour>15:20</Hour>
                </Hours>
            </Session>


            <Footer />
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