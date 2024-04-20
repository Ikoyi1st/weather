// import { useStateContext } from '../Context';
// import Clear from '../assets/images/clear.jpeg';
// import Cloudy from '../assets/images/Cloudy.jpeg';
// import Fog from '../assets/images/fog.jpeg';
// import Rainy from '../assets/images/Rainy.jpeg';
// import Snow from '../assets/images/snow.jpeg';
// import Stormy from '../assets/images/Stormy.jpeg';
// import { useEffect, useState } from 'react';

// const conditionToImageMap = {
//   clear: Clear,
//   cloud: Cloudy,
//   rain: Rainy,
//   shower: Rainy,
//   snow: Snow,
//   fog: Fog,
//   thunder: Stormy,
//   storm: Stormy,
// };

// const BackgroundLayouts = () => {
//   const { weather } = useStateContext();
//   const [image, setImage] = useState(Clear);

//   useEffect(() => {
//     if (weather && weather.conditions) {
//       const imageString = weather.conditions.toLowerCase();
//       const conditionKeys = Object.keys(conditionToImageMap);
//       for (const conditionKey of conditionKeys) {
//         if (imageString.includes(conditionKey)) {
//           setImage(conditionToImageMap[conditionKey]);
//           return; // Exit loop early once a matching condition is found
//         }
//       }
//       // If no matching condition is found, set a fallback image
//       setImage(Clear);
//     }
//   }, [weather]);

//   return <img src={image} alt='weather_image' className='h-screen w-full fixed left-0 top-0 -z-[10]' />;
// };

// export default BackgroundLayouts;

import { useStateContext } from '../Context';
import { useEffect, useState } from 'react';

import clearImage from '../assets/images/clear.jpeg';
import cloudyImage from '../assets/images/Cloudy.jpeg';
import fogImage from '../assets/images/fog.jpeg';
import rainyImage from '../assets/images/Rainy.jpeg';
import snowImage from '../assets/images/snow.jpeg';
import stormyImage from '../assets/images/Stormy.jpeg';

const conditionToImageMap = {
  clear: clearImage,
  cloud: cloudyImage,
  rain: rainyImage,
  shower: rainyImage,
  snow: snowImage,
  fog: fogImage,
  thunder: stormyImage,
  storm: stormyImage,
};

const BackgroundLayouts = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(clearImage);

  useEffect(() => {
    if (weather && weather.conditions) {
      const imageString = weather.conditions.toLowerCase();
      const conditionKeys = Object.keys(conditionToImageMap);
      for (const conditionKey of conditionKeys) {
        if (imageString.includes(conditionKey)) {
          setImage(conditionToImageMap[conditionKey]);
          return; // Exit loop early once a matching condition is found
        }
      }
      // If no matching condition is found, set a fallback image
      setImage(clearImage);
    }
  }, [weather]);

  return <img src={image} alt='weather_image' className='h-screen w-full fixed left-0 top-0 -z-[10]' />;
};

export default BackgroundLayouts;
