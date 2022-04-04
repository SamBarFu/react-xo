import Square from "./Square";

const Board = ({squares, onClick, winner}) => {

    const renderSquare = (i) => {
        let isStripe = false;
        if(winner && winner.stripe){
            isStripe = winner.stripe.includes(i) ? true : false;
        }
        return (
            <Square
                value={squares[i]}
                onClick={() => onClick(i)}
                stripe={isStripe}
            />
        );
    }

    return (
        <>
            <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            </div>
            <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            </div>
            <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
            </div>
        </>
    );
}

export default Board;