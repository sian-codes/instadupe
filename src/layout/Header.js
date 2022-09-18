import React from 'react';
import './Header.css';
import instaLogo from '../assets/instaLogo.png';
import menu from '../assets/icons/menuIcon.png';
import home from '../assets/icons/homeIcon.png';
import message from '../assets/icons/messagesIcon.png';
import story from '../assets/icons/storyIcon.png';
import compass from '../assets/icons/compassIcon.png';
import likes from '../assets/icons/likesIcon.png';
import displayPic from '../assets/displayPic.png';
import SearchBar from "../components/Search";

const HeaderView = () => (
    <div className="header">
        <div>
            <img className="header-logo"
                src={instaLogo}
                alt="logo"
            />
            <img className="menu-icon"
                src={menu}
                alt="menu"
            />
        </div>
        <div className="search-bar">
            <SearchBar />
        </div>
            <div className="header-icons">
                <img
                    src={home}
                    alt="home"
                />
                <img
                    src={message}
                    alt="message"
                />
                <img
                    src={story}
                    alt="story"
                />
                <img
                    src={compass}
                    alt="compass"
                />
                <img
                    src={likes}
                    alt="likes"
                />
                <img
                    src={displayPic}
                    alt="display-pic"
                />
            </div>
    </div>
);

export default HeaderView;