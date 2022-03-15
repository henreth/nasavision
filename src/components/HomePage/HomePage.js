import React, {useState, useEffect} from 'react';
import './HomePage.css';
import apiKey from '../../Apikey';
import axios from 'axios';
import '../PhotoCard/PhotoCard';
import PhotoCard from '../PhotoCard/PhotoCard';

// console.log(key);

let nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey

export default function HomePage(){
    let [data,setData] = useState({});

    useEffect(()=>{
        axios.get(nasaUrl)
        .then(r=>{
            console.log(r.data)
            setData(r.data)})
    },[])

    return(
        <React.Fragment>
            <div className='cardContainer'>
                <PhotoCard data={data}/>
            </div>
        </React.Fragment>
    )
}