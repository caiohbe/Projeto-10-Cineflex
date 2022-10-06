import styled from "styled-components"
import { Link } from "react-router-dom"

export default function SelectMoviePage() {
    return (
        <>
            <Select>Selecione o filme </Select>
            <Movies>
                <Link to={'/sessoes'}><Movie><img src="https://cdn.discordapp.com/attachments/735305761269481502/1027356663755313172/image_3.png" alt=""/></Movie></Link>
                <Movie><img src="https://cdn.discordapp.com/attachments/735305761269481502/1027356663755313172/image_3.png" alt=""/></Movie>
                <Movie><img src="https://cdn.discordapp.com/attachments/735305761269481502/1027356663755313172/image_3.png" alt=""/></Movie>
                <Movie><img src="https://cdn.discordapp.com/attachments/735305761269481502/1027356663755313172/image_3.png" alt=""/></Movie>
                <Movie><img src="https://cdn.discordapp.com/attachments/735305761269481502/1027356663755313172/image_3.png" alt=""/></Movie>
                <Movie><img src="https://cdn.discordapp.com/attachments/735305761269481502/1027356663755313172/image_3.png" alt=""/></Movie>
                <Movie><img src="https://cdn.discordapp.com/attachments/735305761269481502/1027356663755313172/image_3.png" alt=""/></Movie>
                <Movie><img src="https://cdn.discordapp.com/attachments/735305761269481502/1027356663755313172/image_3.png" alt=""/></Movie>
                <Movie><img src="https://cdn.discordapp.com/attachments/735305761269481502/1027356663755313172/image_3.png" alt=""/></Movie>
                <Movie><img src="https://cdn.discordapp.com/attachments/735305761269481502/1027356663755313172/image_3.png" alt=""/></Movie>
                <Movie><img src="https://cdn.discordapp.com/attachments/735305761269481502/1027356663755313172/image_3.png" alt=""/></Movie>

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
    display: flex;
    flex-wrap: wrap;
`

const Movie = styled.div`
    height: 209px;
    width: 145px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    margin-left: 38px;
    margin-bottom: 11px;
`