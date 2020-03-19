import React, { useState, useEffect } from "react";
import axios from 'axios'
const Card = ({props}) => {
    
    const [classdetails, setClass] = useState ([]);

    useEffect (() => {
        axios
        .get(`https://www.dnd5eapi.co${props.url}`)
        .then(response => {
            console.log(response.data)
            setClass(response.data)
              
        })
 },[])

return(
     
 <div className = 'ClassDiv'>


    <h2>Class Name: {props.name}</h2>
    
    
    {console.log(classdetails.proficiencies)}
    <div className = 'prof'>
        <h2>Proficiencies:</h2>
    <ul className = 'profP'>{classdetails.proficiencies && classdetails.proficiencies.map(a => a.name = <p> {a.name}</p>
    )}</ul>
    </div>

<p> Hit Die: {classdetails.hit_die}</p>
<a href = {`https://www.dndbeyond.com/classes/${props.name}`} target="_blank rel=noopener." >View Class In More Detail </a> 
</div>

)}
  
export default Card