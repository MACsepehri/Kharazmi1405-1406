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

export const Header = styled.header`
    border: 2px solid var(--border);
    background: var(--card);
    width: 700px;
    border-radius: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px auto 0;
    text-align: center;
    gap: 10px;
    direction: ltr;
`