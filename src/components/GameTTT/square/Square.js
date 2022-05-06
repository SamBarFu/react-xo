import Equis from '../PlayerTokens/Equis';
import Cero from '../PlayerTokens/Cero';
import StyledSquare from "./StyledSquare";

const Square = ({ value, onClick, stripe }) => {
    let piecePlayer;

    if(value === 'X') piecePlayer = <Equis />;
    if(value === 'O') piecePlayer = <Cero />;
    
    return (
        <StyledSquare onClick={onClick} isStripe={stripe}>
            {piecePlayer}
        </StyledSquare>
    );
};

Square.defaultProps = {
    stripe: false
}

export default Square;