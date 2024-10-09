import React from 'react';
import './app.css'; // Adjust the path if the CSS file is not in the same folder


function LandingPage() {
    return (
        <div className="App">
            <header className="navbar">
                <div className="logo">Ludo Game</div>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#how-to-play">How to Play</a>
                    <a href="#leaderboard">Leaderboard</a>
                    <a href="#sign-up">Sign Up/Login</a>
                    <a href="#play-now" className="play-now">Play Now</a>
                </nav>
            </header>

            <section className="hero">
                <h1>Roll the Dice, Make Your Move!</h1>
                <p>Join the fun of Ludo with friends or play against others online.</p>
                <button onClick={() => window.location.href='#play-now'}>Play Now</button>
            </section>

            <section className="features">
                <div className="feature">
                    <img src="" alt="Multiplayer Mode" />
                    <h3>Multiplayer Mode</h3>
                    <p>Challenge your friends in exciting multiplayer matches.</p>
                </div>
                <div className="feature">
                    <img src="" alt="Compete with Friends" />
                    <h3>Compete with Friends</h3>
                    <p>Play and compete with your buddies anytime, anywhere.</p>
                </div>
                <div className="feature">
                    <img src="" alt="Real-time Chat" />
                    <h3>Real-time Chat</h3>
                    <p>Interact with other players while you play.</p>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2024 Ludo Game | <a href="#contact">Contact Us</a> | <a href="#privacy">Privacy Policy</a></p>
                <p>Follow us on:
                    <a href="#">Facebook</a> |
                    <a href="#">Instagram</a> |
                    <a href="#">Twitter</a>
                </p>
            </footer>
        </div>
    );
}
export default LandingPage;