import React, {Fragment, useState} from 'react';
import Quotes from './Components/Quote';
import Character from './Components/Character';
import Episode from './Components/Episode';

import './App.css'

function App() {

  const [quoteRandom, addQuote] = useState({})

  const [character, addCharacter] = useState({})
  const [charFilt, addChar] = useState({})

  const[episode, addEpisode] = useState({})
  const[epFilt, addEpi] = useState({})


  const callQuote = async () =>{
    const api =await fetch('https://breakingbadapi.com/api/quote/random');
    const quoteData = await api.json();
    addQuote(quoteData[0]);
  }

  const callCharacter = async () =>{
    const api2 =await fetch('https://breakingbadapi.com/api/characters');
    const charData = await api2.json();
    addCharacter(charData);
    addChar(charData);
  }

  const callEpisode = async () =>{
    const api3 =await fetch('https://breakingbadapi.com/api/episodes');
    const epData = await api3.json();
    addEpisode(epData);
    addEpi(epData);
    console.log(episode)
    console.log(epFilt)
  }


  const filterCharacter = (category, category2) => {
     const charFilter = character.filter((corredor2 => corredor2.category === category || corredor2.category === category2))
     addChar(charFilter)
     
  }

  const filterEpisode = (series) => {
    const epFilter = episode.filter((corredor3 => corredor3.series === series))
    addEpi(epFilter)
    
 }


  const removeContent = () =>{
    addQuote({});
    addCharacter({});
    addChar({});
    addEpisode({});
  }


  return (
    <Fragment>
    <header>
    <img src="./img/bb.webp" alt="logo"></img>
    </header>
    <div className="app-content">
    <div className="buttons">

    <button 
    onClick={() => {removeContent(); callQuote();}}
    >Random quote</button>
      {Object.entries(character).length !== 0
        ?(<div className="filters">
        <button
      onClick={() => {filterCharacter("Better Call Saul", "Breaking Bad, Better Call Saul"); }}
      >Better Call Saul</button>

      <button
      onClick={() => { filterCharacter("Breaking Bad", "Breaking Bad, Better Call Saul");}}
      >Breaking Bad</button>

      <button
      onClick={() => {removeContent(); callCharacter();}}
      >All</button>
        </div>

      
      )
    
      : <button
      onClick={() => {removeContent(); callCharacter();}}
      >Characters</button>
      }

      {Object.entries(episode).length !== 0
        ?(<div className="filters">

        <button
      onClick={() => {filterEpisode("Better Call Saul"); }}
      >Better Call Saul</button>

      <button
      onClick={() => { filterEpisode("Breaking Bad");}}
      >Breaking Bad</button>

       <button
      onClick={() => {removeContent(); callEpisode();}}
      >All</button>
        </div>

        
        )

        : <button
      onClick={() => {removeContent(); callEpisode();}}
      >Episodes</button>
      }


    </div>
    <div className="content">

    {Object.entries(quoteRandom).length === 0 && Object.entries(character).length === 0 && Object.entries(episode).length === 0
    ? (<h1>Welcome to Breaking Bad API, choose an option above. vemian.</h1>)
    : Object.entries(quoteRandom).length !== 0
    ? (<Quotes
      quoteRandom={quoteRandom}
      />)
    : Object.entries(charFilt).length !== 0
    ?(
      charFilt.map(corredor => (
      <Character
        key={corredor.char_id}
        corredor={corredor}
      />
      
      ))
    )
    : Object.entries(epFilt).length !== 0
    ?(
      epFilt.map(corredor => (
      <Episode
        key={corredor.episode_id}
        corredor={corredor}
      />
      
      ))
    ):<h1>nel</h1>
      } 

    </div>
      
    </div>
    

    </Fragment>
  );
}

export default App;
