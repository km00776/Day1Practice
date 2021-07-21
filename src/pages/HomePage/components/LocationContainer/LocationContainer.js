import React from 'react';
import '../LocationContainer/LocationContainer.css'

const LocationContainer = () => {
    return (
        <div className="search-container">
            <form>
                <div className="user-location">
                    <label>Get Location: </label>
                    <input></input>
                </div>
                <div className="query-location">
                    <label>To Location: </label>
                    <input></input>
                </div>
                <div className="button-area">
                    <button className="button button1"> Search</button>
                </div>
            </form>
        </div>
    );
}

export default LocationContainer;