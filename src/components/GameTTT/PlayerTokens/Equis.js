import { IconContext } from "react-icons";
import { FaTimes } from "react-icons/fa";


const Equis = () => {

    const styles = { 
        color: '#D65A31', 
        size: '2.6em'
    };

    return (
        <IconContext.Provider value={styles}>
            <FaTimes />
        </IconContext.Provider>
    );
};

export default Equis;