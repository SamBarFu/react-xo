import Game from './components/GameTTT/Game';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
    return (
        <main className="main">
            <div className="wrap-app">
                <Header />
                <Game />
                <Footer />
            </div>
        </main>
    );
}

export default App;