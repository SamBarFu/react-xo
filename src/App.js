import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

import Game from './components/GameTTT/game/Game';
import Setting from './components/settings/Setting';
import { GlobalStyle } from './global-styles';

const MainWrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    background-color:  var(--darked);

    @media(max-width: 575px) {
        padding: 0 1rem;   
    }
`;

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    background-color: var(--grey-dark);
    border-radius: 10px;
    padding: 1.5rem 25px;
    width: 350px;
    max-width: 350px;
    height: 80%;

    @media(max-width: 575px) {
        width: 100%;
        height: calc(100% - 10rem);  
    }
`;


const App = () => {
    return (
        <MainWrapper>
            <AppWrapper>
                <Router>
                    <Routes>
                        <Route path="/" element={<Game />} />
                        <Route path="about" element={<Setting />} />
                    </Routes>
                </Router>
            </AppWrapper>
            <GlobalStyle />
        </MainWrapper>
    );
}

export default App;