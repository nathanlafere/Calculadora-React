import styled from 'styled-components';

export const InputContainer = styled.div`
    margin: 10px auto;
    color: #e8eaed;
    width: 95%;
    height: 75px;
    background-color: #202124;
    border-radius: 5px;
    border: 2px Solid #6E8387;
    display: grid;
    grid-template-rows: 1fr 2fr;
    input {
        text-align: right;
        font-size: 30px;
        font-family: 'Roboto';  
        color: #00FDDC;
        width: 98%;
        height: 100%;
        background-color: transparent;
        border: 0;
        ::placeholder {
            color: #00FDDC;
        }
    }
`

export const FirstDisplay = styled.div`
    padding: 4px;
    text-align: right;
    color: #08c4ac;
`