import styled from "styled-components"

export default function Sucess() {
    return (
        <>
            <Notification>
                Pedido feito<br />com sucesso!
            </Notification>

            <Status>
                <h2>Filme e sessão</h2>
                <h3>
                    Enola Holmes <br />
                    24/06/2021 15:00
                </h3>

                <h2>Ingressos</h2>
                <h3>
                    Assento 15 <br />
                    Assento 16
                </h3>

                <h2>Comprador</h2>
                <h3>
                    Nome: João da Silva Sauro <br />
                    CPF: 123.456.789-10
                </h3>
            </Status>
            <Button>Voltar pra Home</Button>
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

const Status = styled.div`
    color: #293845;
    margin-left: 29px;
    margin-top: 40px;
    
    h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        margin-bottom: 10px;
    }

    h3 {
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;
        margin-bottom: 35px;
    }
`

const Notification = styled.div`
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 1px;
    color: #247A6B;
    text-align: center;
    margin-top: 35px;
    margin-bottom: 10px;
    font-weight: 700;
`