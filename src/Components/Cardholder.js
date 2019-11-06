import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./Photocard"

function CardHolder(){

    const [nasaPhoto, setNasaPhoto] = useState([]);
    
    useEffect(() =>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=7lAmKE094tmE8sj0bcFfbsgyGHaDMIzqpLXX0PBa
        `)
        .then (response =>{
            console.log(response);
            setNasaPhoto(response.data);
        })
        .catch(err =>{
            console.log("You done goofed! We gotta fix it now!");
        });
    }, [])

    return(
        <div>
            <PhotoCard title = {nasaPhoto.title} imgurl = {nasaPhoto.hdurl} explanation ={nasaPhoto.explanation}
                date = {nasaPhoto.date}/>
        </div>
    );
}

export default CardHolder;