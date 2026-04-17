import React from 'react';
import { Link } from 'react-router-dom';

const BannerBox = (props) => {
    return (
        <Link to={`/${props.label.toLowerCase()}`}>
            <div className="box bannerBox overflow-hidden rounded-lg group">
                <img className="w-full rounded-xl transition-transform duration-300 hover:scale-105 group-hover:rotate-2" src={props.src} alt={props.alt} />
            </div>
        </Link>
    )
}

export default BannerBox