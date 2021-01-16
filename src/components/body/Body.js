import React from 'react'
import BodyLeft from '../BodyLeft/BodyLeft';
import BodyRight from '../BodyRight/BodyRight';
import './body.css'


const Body = () => {
    return (
        <div className="body">
            <BodyLeft />
            <BodyRight />
        </div>
    )
}

export default Body;
