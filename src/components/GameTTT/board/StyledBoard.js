import styled from 'styled-components';

const StyledBoard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 75%;
    gap: 8px;
    
    @media(max-width: 575px){
        width: 90%;
    }
`;

const StyledBoardRow = styled.div`
    display: flex;
    justify-content: stretch;
    width: 100%;
    gap: 8px;
`;

export { StyledBoard, StyledBoardRow };