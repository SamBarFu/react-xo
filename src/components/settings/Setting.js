import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaGithub, FaTwitter, FaHome } from "react-icons/fa";
import roxLogo from "../../img/xorLogo.png";

import Footer from '../footer/Footer';

import { StyledWrapperSetting, StyledSetting, StyledSocials } from "./StyledSetting";

const styles = {
    size: '30px',
    color: '#eee'
}

const Setting = ()=> {
    return (
        <StyledWrapperSetting>
            <Link to="/">
                <div className="container-icon-home">
                    <IconContext.Provider value={{color: '#eee', size: '2em'}}>
                        <FaHome />
                    </IconContext.Provider>
                </div>
            </Link>
            <StyledSetting>
                <div className="logo">
                    <div className="container-logo">
                        <img src={roxLogo} alt="rox"/>
                    </div>
                </div>
                <StyledSocials>
                    <a href="https://github.com/SamBarFu/react-xo.git" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={styles}>
                            <FaGithub />
                        </IconContext.Provider>
                    </a>
                    <a href="https://twitter.com/SamBarFu" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={styles}>
                            <FaTwitter />
                        </IconContext.Provider>
                    </a>
                </StyledSocials>
                <small>v1.0.0</small>
                <Footer />
            </StyledSetting>
        </StyledWrapperSetting>
    );
}

export default Setting;