import { useStateContext } from '../Context';
import Clear from '../assets/images/clear.jpeg'
import Cloudy from '../assets/images/Cloudy.jpeg'
import Fog from '../assets/images/fog.jpeg'
import Rainy from '../assets/images/Rainy.jpeg'
import Snow from '../assets/images/snow.jpeg'
import Stormy from '../assets/images/Stormy.jpeg'
// import Sunny from '../assets/images/sunny.jpeg'
import { useEffect, useState } from 'react';

const BackgroundLayout = () => {

  const {weather} = useStateContext()
  const [image, setImage] = useState(Clear)

  useEffect(() => {
    if(weather.conditions) {
      let imageString = weather.conditions
      if(imageString.toLowerCase().includes('clear')) {
        setImage(Clear)
      } else if(imageString.toLowerCase().includes('cloud')) {
        setImage(Cloudy)
      } else if(imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
        setImage(Rainy)
      } else if(imageString.toLowerCase().includes('snow')) {
        setImage(Snow)
      } else if(imageString.toLowerCase().includes('fog')) {
        setImage(Fog)
      } else if(imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
        setImage(Stormy)
      }
    }
  },[weather])

  return (
    <img src={image} alt='weather_image' className='h-screen w-full fixed left-0 top-0 -z-[10]'/>
  )
}

export default BackgroundLayout