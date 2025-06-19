
import TextField from '@mui/material/TextField';
import "./searchBox.css"
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Try } from '@mui/icons-material';

export default function searchBox({ updateInfo }) {
    
        let [city, setCity] = useState("")
        let [error, setError] = useState(false)
    let  API_URL = "https://api.openweathermap.org/data/2.5/weather"
    let API_KEY = "f6d668cfc3660b9ac9dc948ef9db2bc8"
    
    let getWeatherInfo = async () => {
        try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json()
        console.log(jsonResponse)
        let result = {
            city: city,
            feels_like: jsonResponse.main.feels_like,
            temp: jsonResponse.main.temp,
            min_temp : jsonResponse.main.temp_min,
            max_temp: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            description: jsonResponse.weather[0].description,
            
        }
        console.log(result)
        return result;
    } 
     catch (error) {
    throw error
}
    }

    let handleSearch = (event) => {
        // console.log(event.target.value)
        setCity(event.target.value)
    }
    let handleSubmit = async (event) => {
        try {
            
       
        event.preventDefault()
        setCity("")
        let newinfo = await getWeatherInfo()
            updateInfo(newinfo)
             } catch (error) {
            setError(true)
        }
    }
    

    return (
        <div className='searchbox'>
            
            <h3>Search city weather</h3>
            <form on
            Submit={handleSubmit}>
                <TextField id="outlined-basic" label="city" variant="outlined" value={ city} onChange={handleSearch}/>
                <br />
                <br />
                <Button variant="contained" type='submit' >search</Button><br />
            </form> <br />
             {error &&   <p style={{color : "red"}}>No such place exist</p> }
        </div>
    )
} 