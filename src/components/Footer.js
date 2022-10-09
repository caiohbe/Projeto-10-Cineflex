import styled from "styled-components"

export default function Footer({banner, title, sessionTime}) {
    return (
        <Bottom>
            <MovieBanner>
                {banner}
            </MovieBanner>
            <FooterText>
                <p data-identifier="movie-img-preview">{title}</p> <br />
                <p data-identifier="movie-and-session-infos-preview">{sessionTime}</p>
            </FooterText>
        </Bottom>
    )
}

const FooterText = styled.div`
    display: flex;
    flex-direction: column;
`

const Bottom = styled.div`
    height: 117px;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #DFE6ED;
    display: flex;
    align-items: center;
    border: 1px solid #9EADBA;

    p {
        color: #293845;
        font-size: 26px;
    }

    img {
        height: 72px;
    }

`

const MovieBanner = styled.div`
    background-color: #FFFFFF;
    width: 64px;
    height: 89px;
    box-shadow: 0px 2px 4px 0px #0000001A;
    margin-left: 10px;
    margin-right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
`