import React, {Fragment} from 'react';

const Character = ({corredor}) => {
    const {name, nickname, portrayed, status, img} = corredor;

    const divStyle = {
        backgroundImage: 'url('+img+')'
    };

    function Backy(){
        return <div className="background" style={divStyle}>
         <div className="character">
            <h1>{portrayed}</h1>
            <h2>as {name}</h2>
            <h3>{nickname}</h3>
            <p>{status}</p>
        </div>
        </div>
    }
    return (
        <Fragment>
        {Backy()}
        </Fragment>
        

     );
}
 
export default Character;