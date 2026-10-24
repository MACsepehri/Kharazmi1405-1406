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

    button {
        cursor: pointer;
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

    .no-decoration,.no-decoration:hover {
        text-decoration: none;
    }
`;

export const BaseHeader = styled.header`
    width: 90%;
    padding: 20px;
    border-radius: 20px;
    background: var(--card);
    margin: auto;
    border: 2px solid var(--border);
    position: absolute;
    right: 50%;
    transform: translateX(50%);
`

export const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;

export const SectionContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;