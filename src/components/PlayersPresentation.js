import React from 'react'
import { useState } from 'react'
import { Players } from '../shared/ListOfPlayers'
import "./Players.css"

function Player() {
    const [player, setPlayer] = useState([]);

    return (
            <div className='container'>
                {Players.map((player) => (
                    <div className='column' key={player.id}>
                        <div className='card'>
                            <img src={player.img} alt="" />
                            <div className="card-body">
                                <div className="title-body">
                                    <h3>{player.name}</h3>
                                </div>
                                <p className='title'></p>
                            </div>
                            <button onClick={()=>{setPlayer(player)}}>
                                <a className='popup-title' href='#popup1' id='openPopUp'>Detail</a>
                            </button>

                        </div>
                    </div>
                ))}
                <div id='popup1' className='overlay'>
                        <div className='popup'>
                        <img alt='Image' src={player.img}/>
                        <h2>{player.name}</h2>
                        <a className='close' href='#'>&times;</a>
                        <div content='content'>
                            {player.info}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Player;