import React, {useState, useEffect} from 'react';
import './HomePage.css';
import apiKey from '../../Apikey';
import Photo from '../Photo/Photo';
import axios from 'axios';
import Epic from '../EPIC/Epic';

let photoOfTheDayURL = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey
let epicURL = 'https://api.nasa.gov/EPIC/api/natural?api_key=' + apiKey

let earthPhotoUrl = 'https://api.nasa.gov/EPIC/archive/natural/2022/06/01/png/epic_1b_20220601001751.png?api_key=' + apiKey
// 
// EXAMPLE: https://api.nasa.gov/EPIC/archive/natural/2022/06/01/png/epic_1b_20220601001751.png?api_key=DEMO_KEY

export default function HomePage(){
    let [photoOfTheDay,setPhotoOfTheDay] = useState({});

    let [epicData,setEpicData] = useState({})

    useEffect(()=>{
        axios.get(photoOfTheDayURL)
        .then(r=>{
            setPhotoOfTheDay(r.data)})
        
        axios.get(epicURL)
        .then(r=>{
            setEpicData(r.data)
        })
    },[])

    return(
        <React.Fragment>
            <h1 className='title'>NASAVISION</h1>
            {/* <Photo data={photoOfTheDay} /> */}
            <Epic epicData ={epicData} />
            <div className='background-container'>
                <div class="stars"></div>
                <div class="twinkling"></div>
                {/* <div class="clouds"></div> */}
            </div>
        </React.Fragment>
    )
}