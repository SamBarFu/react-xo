import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    margin: 0 auto;
    background-color: var(--grey-a10);
    padding: 5px;
    border-radius: 10px;

    @media(max-width: 575px) {
        width: 90%;   
    }
`;

const StyledIconHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 45px;
    height: 45px;
    cursor: pointer;
`;

export {StyledHeader, StyledIconHeader};