import {React} from 'react';
import PropTypes from 'prop-types';
import { IconContext } from "react-icons";
import { BsTrophyFill } from "react-icons/bs";

const Players = ({playersInfo}) => {

    /* const getWinsPlayer = (wins)=>{
        if(wins > 0){
            return  (
                <span className='player-wins'>
                    <IconContext.Provider value={{color: '#eee', size: '.7rem'}}>
                        <BsTrophyFill /> {wins}
                    </IconContext.Provider>
                </span>
            );
        }
    } */

    return (
        <div className="wrap-players">
            <div className='players'>
                { playersInfo.map((player, index)=>{                    
                    return (
                        <div className='player-card' key={index}>
                            <div className={`container-avatar ${player.currentTurn ? 'current-turn': 'turn-off'}`}>
                                {player.icon}                   
                            </div>
                            <span className='player-wins'>
                                <IconContext.Provider value={{color: '#eee', size: '13px'}}>
                                    <BsTrophyFill /> {player.wins}
                                </IconContext.Provider>
                            </span>
                        </div>
                    )
                }) }
            </div>
        </div>
    );
}

Players.propTypes = {
    playersInfo: PropTypes.array
}

export default Players;