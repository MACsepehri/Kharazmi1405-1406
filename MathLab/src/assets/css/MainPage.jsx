import styled from 'styled-components';

export const OuterBox = styled.div`
    width: 250px;
    height: 250px;
    border: 2px solid var(--dark-blue-border);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

export const InnerBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`