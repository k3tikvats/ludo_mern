import React, { useRef, useState } from 'react';
import './profile.css';
import EditModal from './editModal';
const Profile = () => {
    const [User, setUser] = useState({
        name: 'User Name',
        avatar: "/profile_image.jpg",
        username: 'user_name23',
        games_won: 30,
        games_lost: 9,
        winning_percentage: 70,
        coins: 784,
        friends: 9,
        about: 'this is about my Profile',
    });

    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveChanges = (updatedUser) => {
        setUser((prevState) => ({
            ...prevState,
            ...updatedUser,
        }));
        handleCloseModal();
    };
    const fileInputRef = useRef(null);
    const editProfilePic = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUser((prevState) => ({
                ...prevState,
                avatar: URL.createObjectURL(file),
            }));
        }
    };

    return (
        <div className='Profile'>
            <div className='profile-banner'>
                <div className='navbar'>
                    <a class="active">Profile</a>
                    <a>Find Friends</a>
                    <a>Play a new game</a>
                    <a>Home</a>
                </div>
                <div className='Profile-Header'>
                    <div className='temp'>
                        <div><img src={User.avatar} alt="avatar" className="profile-avatar" /></div>
                        <div><button className='editprofilepic' onClick={editProfilePic}>
                            Edit
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: 'none' }} />
                        </button></div>
                    </div>
                    <h1 className='profile-name'>{User.name}</h1>
                    
                    <div className='profile-details'>
                        <div className='User-Name'>
                            <p className='header-text'>@{User.username}</p>
                            <button onClick={handleOpenModal} className="edit-icon">(Edit)</button>
                        </div>
                        <div className='About'>
                            <p className='header-text2'>{User.about}</p>
                        </div>
                    </div>
                </div>
                <div className='profile-stats'>
                    <div className='stat'>
                        <div className='stat-label'>Games Won</div>
                        <div className='stat-value'>{User.games_won}</div>
                    </div>
                    <div className='stat' >
                        <div className='stat-label'>Games Lost</div>
                        <div className='stat-value'>{User.games_lost}</div>
                    </div>
                    <div className='stat'>
                        <div className='stat-label'>Win Percentage</div>
                        <div className='stat-value'>{User.winning_percentage}%</div>
                    </div>
                    <div className='stat'>
                        <div className='stat-label'>Coins</div>
                        <div className='stat-value'>{User.coins}</div>
                    </div><div className='stat'>
                        <div className='stat-label'>Friends</div>
                        <div className='stat-value'>{User.friends}</div>
                    </div>

                </div>
                <div className='navbar2'>
                    <a>Contact</a>
                    <a>About us</a>
                    <a class='ludo'>Ludo-Game</a>
                </div>
            </div>
            <EditModal
                isopen={isModalOpen}
                onclose={handleCloseModal}
                User={User}
                onsave={handleSaveChanges}
            />
        </div>

    )
}



export default Profile;

