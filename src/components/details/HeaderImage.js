import React from 'react'
import './HeaderImage.css'

function HeaderImage(props) {
    return (
        <div className="header-image-container">
            <div className="header-image">
                <img src={props.url} alt="header-image-alt" />
            </div>
        </div>
    )
}

export default HeaderImage;
