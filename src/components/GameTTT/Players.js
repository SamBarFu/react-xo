import {React} from 'react';
import PropTypes from 'prop-types';
import { IconContext } from "react-icons";
import { FaBalanceScale } from "react-icons/fa";
import { BsTrophyFill } from "react-icons/bs";

const Players = ({playersInfo, draws}) => {

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
                        <div className={`player-card player-${index}`} key={player.name}>
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
                <div className='info-game'>
                    <div className='count-draws'>
                        <IconContext.Provider value={{color: '#eee', size: '16px'}}>
                            <FaBalanceScale /> { draws}
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    );
}

Players.defaultProps = {
    draws: 0
}

Players.propTypes = {
    playersInfo: PropTypes.array
}

export default Players;