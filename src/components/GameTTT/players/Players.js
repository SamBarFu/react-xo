import {React} from 'react';
import PropTypes from 'prop-types';

import InfoGame from './infoGame/InfoGame';
import { IconContext } from "react-icons";
import { BsTrophyFill } from "react-icons/bs";

import { StyledPlayers, StyledPlayersCard, StyledPlayersAvatar } from "./StyledPlayers";
import StyledWrapperIcon from './StyledWraperIcon';

const Players = ({playersInfo, draws}) => {

    return (
        <div>
            <StyledPlayers>
                { playersInfo.map((player, index)=>{                    
                    return (
                        <StyledPlayersCard index={index} key={player.name}>
                            <StyledPlayersAvatar playerTurn={player.currentTurn}>
                                {player.icon}                   
                            </StyledPlayersAvatar>
                            <StyledWrapperIcon>
                                <IconContext.Provider value={{color: '#eee', size: '13px'}}>
                                    <BsTrophyFill /> {player.wins}
                                </IconContext.Provider>
                            </StyledWrapperIcon>
                        </StyledPlayersCard>
                    )
                }) }
                <InfoGame draws={draws}/>
            </StyledPlayers>
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