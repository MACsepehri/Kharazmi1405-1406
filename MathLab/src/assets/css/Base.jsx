import styled,{ createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: IranSans;
        src: url('font/font.woff') format('woff');
    }

    * {
        font-family: IranSans;
        color: white;
        transition: all 300ms ease-in-out;
    }

    :root {
        --background: #0D1117;
        --card: #161B22;
        --border: #30363D;
        --dark-blue-border: #24364b;
        --dark-blue-card: #121d2a;
        --sec-text: #8B949E;
        --primary: #3979c3;
        --success: #3FB950;
        --danger: #F85149;
    }

    body {
        background-color: var(--background);
        text-align: center;
        direction: rtl;
    }

    a {
        color: var(--primary);
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .primary {
        color: var(--primary);
    }
`;

export const BaseHeader = styled.header`
    width: 90%;
    padding: 20px;
    border-radius: 20px;
    background: var(--card);
    margin: auto;
    border: 2px solid var(--border);
`

export const Section = styled.section`
    width: 100%;
`

export const SectionContent = styled.section`
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%,-50%);
`