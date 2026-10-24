import styled from "styled-components";

export const InputBox = styled.input`
    width: 200px;
    padding: 5px;
    border-radius: 5px;
    border: 2px solid var(--border);
    background: var(--card);

    &:focus {
        outline: none;
    }
`

export const ActionButton = styled.button`
    width: 160px;
    padding: 10px;
    border-radius: 5px;
    border: 2px solid var(--dark-border);
    background: var(--dark-card);
`