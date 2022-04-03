import { IconContext } from "react-icons";
import { CgShapeCircle } from "react-icons/cg";

const Cero = () => {

    const styles = { 
        color: '#22577E', 
        size: '3em'
    };

    return (
        <IconContext.Provider value={styles}>
            <CgShapeCircle />
        </IconContext.Provider>
    );
};

export default Cero;