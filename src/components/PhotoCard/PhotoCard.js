import React, { useState,useEffect } from 'react'
import './PhotoCard.css';
import axios from 'axios';

function PhotoCard ({data}) {

    function openLink(){
        window.open(data.hdurl)
    }

    return (
        <div className='cardContainer'>
            <div className='card'>
            <img className='image' src={data.url}/>
                <div className='info-box'>
                    <h1 className='card-title-long'>{data.title}</h1>
                    <h3 className='card-date'>{data.date} </h3>
                    {/* <hr></hr> */}
                    <p className='card-text'>{data.explanation}</p>
                    <button onClick={openLink} className='link-button'>View Full Photo</button>
                </div>
            </div>
      </div>
    )
}

export default PhotoCard;