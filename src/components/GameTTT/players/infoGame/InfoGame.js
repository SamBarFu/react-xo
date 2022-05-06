import { IconContext } from "react-icons";
import { FaBalanceScale } from "react-icons/fa";
import StyledInfoGame from './StyledInfoGame';
import StyledWrapperIcon from "../StyledWraperIcon";

const InfoGame = ({draws}) => {
    return (
        <StyledInfoGame>
            <StyledWrapperIcon>
                <IconContext.Provider value={{color: '#eee', size: '16px'}}>
                    <FaBalanceScale /> { draws}
                </IconContext.Provider>
            </StyledWrapperIcon>
        </StyledInfoGame>
    );
}

export default InfoGame;
