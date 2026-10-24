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
    background: #050e1a;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
    }
`

export const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
`

export const CloseButton = styled.button`
    color: white;
    width: 150px;
    padding: 10px;
    border-radius: 8px;
    border: 2px solid #e50101;
    background: #9b0d0d;
    margin-top: 20px;
`