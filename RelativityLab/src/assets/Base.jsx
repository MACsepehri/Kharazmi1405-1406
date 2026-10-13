import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: IranSans;
        src: url('IRANSansXV.woff') format('woff');
    }

    :root {
        --border: #686868;
        --card: #1f1f1f;
    }

    * {
        font-family: IranSans;
        color: white;
        transition: all 300ms ease-in-out;
    }

    body {
        background: linear-gradient(to right, #121212, #212121);
        text-align: center;
        margin: auto;
    }

    a {
        text-decoration: none;
        color: #cfcfcf
    }

    a:hover {
        color: #eff9ff
    }

    main {
        margin-top: 150px;
    }
`

export const OuterHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 1000;
`;

export const Header = styled.header`
    border: 2px solid var(--border);
    background: var(--card);
    width: 700px;
    border-radius: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px auto 0;
    text-align: center;
    gap: 10px;
    direction: ltr;
`

export const Section = styled.section`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const LineHeight = styled.div`
    line-height: 0.8;
`

export const Footer = styled.footer`
    div {
        display: flex;
        gap: 30px;
    }
`

export const FooterImage = styled.img`
    margin: auto;
    border-radius: 100%;
    width: 200px;
    height: 200px;
`

export const FooterSpan = styled.span`
    text-align: right;
    margin-top: 40px;
`