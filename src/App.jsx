import { useState } from 'react';
import './App.css';
import SearchIcon from './assets/icons/search_svg.svg';
import BackgroundLayouts from './Components/BackgroundLayouts';

function App() {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', input);
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
    </div>
  );
}

export default App;
