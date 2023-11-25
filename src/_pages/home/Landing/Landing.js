import React from "react";

import Header from "_components/Dashboard/Header/Header";
import Sidebar from "_components/Dashboard/Sidebar/Sidebar";

const Landing = () => {

    return (
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <main className="content">
                    Page content
                </main>
            </div>
        </>
    )
}

export default Landing;