import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { MdRestartAlt } from "react-icons/md";
/* import { BiCog } from "react-icons/bi"; */
import { FaInfo } from "react-icons/fa";
import roxLogo from "../../img/xorLogo.png";

import {StyledHeader, StyledIconHeader} from "./StyledHeader";

const Header = ({onClick})=>{
    return (
        <StyledHeader>
            <StyledIconHeader onClick={onClick}>
                <IconContext.Provider value={{color: '#eee', size: '1.8em'}}>
                    <MdRestartAlt />
                </IconContext.Provider>
            </StyledIconHeader>
            <img width="60px" src={roxLogo} alt="rox"/>
            <Link to="/about">
                <StyledIconHeader>
                    <IconContext.Provider value={{color: '#eee', size: '1.2em'}}>
                        <FaInfo />
                    </IconContext.Provider>
                </StyledIconHeader>
            </Link>
        </StyledHeader>
    );
}

export default Header;