import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 15px;
    background-color: #3c4043;
    border-radius: 4px;
    border: 0.17rem solid #6E8387;
    color: #00FDDC;
    font-size: 15px;
    font-weight: 700;
    flex: 1;
    &:hover {
        background-color: rgb(65,69,72);
    }
    &:active {
        background-color: rgb(55,59,62);
    }
`