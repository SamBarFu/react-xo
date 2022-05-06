import Square from "../square/Square";

import { StyledBoard, StyledBoardRow } from "./StyledBoard";

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

    const renderBoard = ()=>{
        for (let i = 0; i < 3; i++) {
            console.log(i);
        }
    }

    renderBoard();

    return (
        <StyledBoard>
            <StyledBoardRow>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </StyledBoardRow>
            <StyledBoardRow>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </StyledBoardRow>
            <StyledBoardRow>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </StyledBoardRow>
        </StyledBoard>
    );
}

export default Board;