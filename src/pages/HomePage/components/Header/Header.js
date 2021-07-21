import React from 'react'
import '../Header/Header.css'

const Header = () => {
    return (
        <React.Fragment>
            <header className="header-fixed">
                <div className="header-limiter">
                    <h1>London<span>TravelMap</span></h1>
                </div>
            </header>
            <div className="header-fixed-placeholder" />
        </React.Fragment>
    );
}

export default Header;