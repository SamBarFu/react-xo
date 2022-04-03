import Equis from './PlayerTokens/Equis';
import Cero from './PlayerTokens/Cero';

const Square = ({ value, onClick, stripe }) => {

    let button;

    if(value === 'X') button = <Equis />;
    if(value === 'O') button = <Cero />;

    
    return (
        <button className={`square ${stripe ? 'square-stripe' : ''}`} onClick={onClick}>
            {button}
        </button>
    );
};

Square.defaultProps = {
    stripe: false
}

export default Square;