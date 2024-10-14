import React from 'react';
import './app.css'; // Adjust the path if the CSS file is not in the same folder

import chaticon from './chat.jpg'
import { FaUserFriends } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";

import ludoicon from './ludo.png';

function LandingPage() {
    return (
        <div className="App">
            <header className="navbar">
            <div className='logocontainer' style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    Ludo Master
                <img src={ludoicon} alt="Ludo Icon" style={{ width: '30px', height: '30px' }} />
            </div>
                
                <nav>
                    <a href="#home" style={{ fontSize: '1.2em' }}>Home</a>
                    <a href="#how-to-play" style={{ fontSize: '1.2em' }}>How to Play</a>
                    <a href="#leaderboard" style={{ fontSize: '1.2em' }}>Leaderboard</a>
                    <a href="#sign-up" style={{ fontSize: '1.2em' }}>Sign Up/Login</a>
                    <a href="#play-now" className="play-now" style={{ fontSize: '1.2em' }}>Play Now</a>
                </nav>
            </header>

            <section className="hero">
                <h1 style={{ fontSize: '3em' }}>Roll the Dice, Make Your Move!</h1>
                <p style={{ fontSize: '1.5em' }}>Join the fun of Ludo with friends or play against others online.</p>
                <button onClick={() => window.location.href='#play-now'} style={{ fontSize: '1.2em' }}>Play Now</button>
            </section>

            <section className="features">
                <div className="feature">
                    <IoGameControllerOutline size={50} />
                    <h3 style={{ fontSize: '1.5em' }}>Multiplayer Mode</h3>
                    <p style={{ fontSize: '1.2em' }}>Challenge your friends in exciting multiplayer matches.</p>
                </div>
                <div className="feature">
                    <div>
                        <FaUserFriends size={50} />
                    </div>
                    <h3 style={{ fontSize: '1.5em' }}>Compete with Friends</h3>
                    <p style={{ fontSize: '1.2em' }}>Play and compete with your buddies anytime, anywhere.</p>
                </div>
                <div className="feature">
                    <div>
                        <IoChatbubblesOutline size={50} />
                    </div>
                    <h3 style={{ fontSize: '1.5em' }}>Real-time Chat</h3>
                    <p style={{ fontSize: '1.2em' }}>Interact with other players while you play.</p>
                </div>
            </section>

            <footer className="footer">
                <p style={{ fontSize: '1.2em' }}>&copy; 2024 Ludo Game | <a href="#contact">Contact Us</a> | <a href="#privacy">Privacy Policy</a></p>
                <p style={{ fontSize: '1.2em' }}>Follow us on:
                        <a href="#">Facebook</a> |
                    <a href="#">Instagram</a> |
                    <a href="#">Twitter</a>
                </p>
            </footer>
        </div>
    );
}
export default LandingPage;