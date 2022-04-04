import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { MdRestartAlt } from "react-icons/md";
/* import { BiCog } from "react-icons/bi"; */
import { FaInfo } from "react-icons/fa";
import roxLogo from "../img/xorLogo.png";

const Header = ({onClick})=>{

    const styles = { 
        color: '#eee', 
        size: '1.8em'
    };

    return (
        <header className="wrap-header">
            <div className="container-icon-header" onClick={onClick}>
                <IconContext.Provider value={styles}>
                    <MdRestartAlt />
                </IconContext.Provider>
            </div>
            <img className="header-logo" src={roxLogo} alt="rox"/>
            <Link to="/about">
                <div className="container-icon-header">
                    <IconContext.Provider value={{color: '#eee', size: '1.2em'}}>
                        <FaInfo />
                    </IconContext.Provider>
                </div>
            </Link>
        </header>
    );
}

export default Header;