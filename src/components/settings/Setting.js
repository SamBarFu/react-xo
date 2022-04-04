import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaGithub, FaTwitter, FaHome } from "react-icons/fa";
import roxLogo from "../../img/xorLogo.png";

import Footer from '../Footer';

const styles = {
    size: '30px',
    color: '#eee'
}

const Setting = ()=> {
    return (
        <div className="wrap-setting">
            <Link to="/">
                <div className="container-icon-home">
                    <IconContext.Provider value={{color: '#eee', size: '2em'}}>
                        <FaHome />
                    </IconContext.Provider>
            </div>
            </Link>
            <div className="setting">
                <div className="logo">
                    <div className="container-logo">
                        <img src={roxLogo} alt="rox"/>
                    </div>
                    {/* <h1>Tic Tac Toe Game</h1> */}
                </div>
                <div className="socials">
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
                </div>
                <small>v1.0.0</small>
                <Footer />
            </div>
        </div>
    );
}

export default Setting;