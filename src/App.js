import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Game from './components/GameTTT/Game';
import Setting from './components/settings/Setting';
const App = () => {
    return (
        <main className="main">
            <div className="wrap-app">
                <Router>
                    <Routes>
                        <Route path="/" element={<Game />} />
                        <Route path="about" element={<Setting />} />
                    </Routes>
                </Router>
            </div>
        </main>
    );
}

export default App;