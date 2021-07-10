import React from 'react';

const Episode = ({corredor}) => {

const {title, season, episode, air_date} = corredor;

    return ( 
    <div className="episode">
        <h2><span>season {season}</span>-{episode}- </h2>
        <p>{title}<span> {air_date}</span></p>
    </div>
     );
}
 
export default Episode;