import styled from 'styled-components';

const StyledPlayers = styled.div`
    display: grid;
    grid-template-columns: 60px auto 60px;
    grid-template-rows: auto;
    /* justify-content: space-between; */
    width: 80%;
    margin: 0 auto 1rem auto;

    @media(max-width: 575px){
        width: 90%;
    }
`;

const StyledPlayersCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    grid-row: 1/2;
    grid-column: ${props => props.index === 0 ? '1/2' : (props.index === 1 ? '3/4' : '')};
`;

const StyledPlayersAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 10px;
    border-radius: 8px;
    background-color: ${props => props.playerTurn ? 'var(--grey-d)' : 'var(--grey-a10)'}
`;

const StyledPlayersWins = styled.div`

`;

export { StyledPlayers, StyledPlayersCard, StyledPlayersAvatar };