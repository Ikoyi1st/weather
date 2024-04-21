import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios'

const StateContext = createContext()

// eslint-disable-next-line react/prop-types
export const StateContextProvider = ({children}) => {
    const [weather, setWeather] = useState({})
    const [values, setValues] = useState([])
    const [place, setPlace] = useState('Lagos')
    const [thisLocation, setLocation] = useState('')


    const fetchWeather = async() => {
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
                aggregateHours: '24',
                location: place,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnNames: 0,
              },
              headers: {
                'X-RapidAPI-Key' : "97376c82afmsh4ce7a60754fb96bp14d0b5jsn09896e5c8e0b",
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
              }
        }

        try{
            const response = await axios.request(options);
            const thisData = Object.values(response.data.locations)[0]
            setLocation(thisData.address)
            setValues(thisData.values)
            setWeather(thisData.values[0])

        }catch(e) {
            console.error(e);

            alert('This place does ot exist')
        }
    }

    useEffect(() => {
        
        fetchWeather()

    },[place])


    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place

        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)