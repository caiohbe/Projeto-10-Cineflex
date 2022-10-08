import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function FinishOrder({ids, name, cpf}) {
    return (
        <Link to='/sucesso'>
            <Button onClick={() => order(ids, name, cpf)}>Reservar assento(s)</Button>
        </Link>
    )

    function order(ids, name, cpf) {
        console.log(ids,name,cpf)

        axios.
        post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many',
        {
            ids: ids,
            name: name,
            cpf: cpf
        })
    }
    
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
    margin-bottom: 150px;
    text-decoration: underline #E8833A;
`