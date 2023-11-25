import React from "react";

import Logo2 from "assets/logo/logo2.svg"

import './Sidebar.css'

const Sidebar = () => {

    return (
        <aside id="sidebar" className="sidebar open">
            <div className="top-sidebar">
                <a href="#" className="site-logo">
                    <img src={Logo2} alt="My Logo" />
                </a>
                <div className="hidden-sidebar sidebar-username">Eldhose Saji</div>
                <div className="hidden-sidebar sidebar-useremail">eldhose.saji@gmail.com</div>
            </div>
            <div className="middle-sidebar">
                <ul className="sidebar-list">
                    <li className="sidebar-list-item active">
                        <a href="#" className="sidebar-link">
                            <svg className="sidebar-icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
                                <g>
                                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
                                </g>
                            </svg>
                            <div className="hidden-sidebar">Dashboard</div>
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="#" className="sidebar-link">
                            <svg className="sidebar-icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
                                    <g>
                                        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
                                    </g>
                            </svg>
                            <div className="hidden-sidebar">Board</div>
                        </a>
                    </li>
                   
                 
                   
                    
                    
                   
                   
                </ul>
            </div>
            <div className="bottom-sidebar">
                <ul className="sidebar-list">
                <li className="sidebar-list-item">
                        <a href="#" className="sidebar-link">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="sidebar-icon">
                                <g>
                                    <path
                                        d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z">
                                    </path>
                                </g>
                            </svg>
                            <div className="hidden-sidebar">Logout</div>
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="#" className="sidebar-link">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="sidebar-icon">
                                <g>
                                    <path
                                        d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z">
                                    </path>
                                </g>
                            </svg>
                            <div className="hidden-sidebar">Settings</div>
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="#" className="sidebar-link">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="sidebar-icon">
                                <g>
                                    <path
                                        d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z">
                                    </path>
                                </g>
                            </svg>
                            <div className="hidden-sidebar">Send Feedback</div>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )

}

export default Sidebar;