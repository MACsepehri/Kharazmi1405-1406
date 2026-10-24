import styled,{ createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: IranSans;
        src: url('/font/font.woff') format('woff');
    }

    * {
        font-family: IranSans;
        color: white;
        transition: all 300ms ease-in-out;
    }

    :root {
        --background: #080808;
        --card: #111111;
        --border: #303030;

        --dark-border: #414141;
        --dark-card: #0D0D0D;

        --sec-text: #858585;
        --primary: #EAEAEA;

        --success: #52D68A;
        --danger: #FF5C5C;
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
    display: flex;
    flex: 1;

    @media (max-width: 500px) {
        width: 97%;
    }
`

export const Image = styled.img`
    max-width: 128px;
    max-height: 128px;
    border-radius: 20px;
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

export const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
`