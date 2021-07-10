import React, {Fragment} from 'react';

const Quotes = ({quoteRandom}) => {
    const {quote, author, series} = quoteRandom

    return ( 
        <Fragment>
            <div className="quote">
                <h3>From: {series}</h3>
                <p>" {quote} " <span>-{author}</span></p>
            </div>
        </Fragment>
     );
}
 
export default Quotes;