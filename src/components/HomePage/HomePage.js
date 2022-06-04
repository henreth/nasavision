import React, { useState, useEffect } from 'react';
import './HomePage.css';
import apiKey from '../../Apikey';
import Photo from '../Photo/Photo';
import axios from 'axios';

let photoOfTheDayURL = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey


export default function HomePage() {
    let [photoOfTheDay, setPhotoOfTheDay] = useState({});

    useEffect(() => {
        axios.get(photoOfTheDayURL)
            .then(r => {
                setPhotoOfTheDay(r.data)
            })
    }, [])

    

    return (
        <React.Fragment>
            <h1 className='title'>NASAVISION</h1>
            <Photo data={photoOfTheDay} />

            <div className='background-container'>
                <div class="stars"></div>
                <div class="twinkling"></div>
                {/* <div class="clouds"></div> */}
            </div>
        </React.Fragment>
    )
}