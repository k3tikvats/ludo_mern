import React, {useState} from "react";
import './editModal.css';

const EditModal= ({isopen, onclose, User, onsave}) => {
    const [name, setName] = useState(User.name);
    const [username, setUsername] = useState(User.username);
    const [about, setAbout] = useState(User.about);

    const handleSave = () => {
        onsave({name, username, about});
        onclose();
    }
    if (!isopen) return null;
    return(
        <div className="modal">
            <div className="modal-content">
                <h2 className="heading" >Edit Profile</h2>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                </label>
                <br></br>
                <label>
                    Userame:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                </label>
                <br></br>
                <label>
                    About:
                    <input
                        type="text"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        />
                </label>
                <button onClick={handleSave} className="savebutton">Save</button>
                <button onClick={onclose} className="cancelbutton">Cancel</button> 
            </div>
        </div>
    )


    
};

export default EditModal;