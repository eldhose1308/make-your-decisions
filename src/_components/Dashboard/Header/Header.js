import React from "react";

import './Header.css'
const Header = (props) => {

    const toggleSidebar = () => {
        const sidebar = document.querySelector('#sidebar');
        sidebar && sidebar.classList.toggle('open')
    }

    return (
        <header className="header">
            <button className="menu-icon-btn" onClick={toggleSidebar}>
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="menu-icon">
                <g>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </g>
            </svg>
            </button>
        </header>
    )
} 

export default Header;