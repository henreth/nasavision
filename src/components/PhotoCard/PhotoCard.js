import React, { useState,useEffect } from 'react'
import './PhotoCard.css';
import axios from 'axios';

let unmatchUrl = 'http://localhost:4000/unmatch';
let userUrl = 'http://localhost:4000/user';

function PhotoCard ({data}) {

    return (
        <div className='cardContainer'>
            <div className='card'>
            <img className='image' src={data.url}/>
                <div className='info-box'>
                    <h1 className='card-title-long'>{data.title}</h1>
                    <h3 className='card-subtitle'>{data.date} </h3>
                    {/* <hr></hr> */}
                    <p className='card-text'>{data.explanation}</p>
                    <button className='clicked-button'>PLACEHOLDER</button>
                </div>
            </div>
      </div>
    )
}

export default PhotoCard;