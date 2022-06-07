import React, { useState, useEffect } from 'react';
import './HomePage.css';
import apiKey from '../../Apikey';
import Photo from '../Photo/Photo';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


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
            <div className='credits'>
                <div>Developed By: Henry Miller</div>
                <a className="repo" target="_blank" rel="noreferrer" href="https://github.com/henreth/nasavision">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>


            <div className='background-container'>
                <div className="stars"></div>
                <div className="twinkling"></div>
            </div>
        </React.Fragment>
    )
}