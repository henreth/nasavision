import React, {useState, useEffect} from 'react';
import './HomePage.css';
import apiKey from '../../Apikey';
import axios from 'axios';

let nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey

export default function HomePage(){
    let [photoOfTheDay,setPhotoOfTheDay] = useState({});

    useEffect(()=>{
        axios.get(nasaUrl)
        .then(r=>{
            console.log(r.data)
            setPhotoOfTheDay(r.data)})
    },[])

    return(
        <React.Fragment>
            <h1 className='title'>NASAVISION</h1>
            <div className='background-container'>
                <div class="stars"></div>
                <div class="twinkling"></div>
                {/* <div class="clouds"></div> */}
            </div>
        </React.Fragment>
    )
}