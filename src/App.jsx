import { useState } from 'react';
import './App.css';
import SearchIcon from './assets/icons/search_svg.svg';
import BackgroundLayouts from './Component/BackgroundLayouts';
import WeatherCard from './Component/WeatherCard';
import MiniCard from './Component/MiniCard';
import { useStateContext } from './Context';

function App() {
  const [input, setInput] = useState('');
  const { weather, thisLocation, values, setPlace } = useStateContext()

  const handleSubmit = () => {
    // Handle form submission here
    setPlace(input)
    setInput('')
  };

  return (
    <div className='w-full h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-3xl'>Skyther</h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
          <img src={SearchIcon} alt='search' className='w-[1.5rem] h-[1.5rem]' />
          <input
            onKeyUp={(e) => {
              if (e.key === 'Enter') handleSubmit();
            }}
            type='text'
            
            className='focus:outline-none w-full text-[#212121] text-lg'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Enter location...'
          />
        </div>
      </nav>
      <BackgroundLayouts />
      <main className=' w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
        <WeatherCard 
         place={thisLocation}
         windspeed={weather.wspd}
         humidity={weather.humidity}
         temperature={weather.temp}
         heatIndex={weather.heatIndex}
         iconString={weather.conditions}
         conditions={weather.conditions}
        />

        <div className=' flex justify-center gap-8 flex-wrap w-[60%]'>
          {
            values?.slice(1,7).map(curr => {
             return (
              <MiniCard
              key={curr.datetime}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.conditions}
             />
             )
            })
          }
        </div>
      </main>
    </div>
  );
}

export default App;
