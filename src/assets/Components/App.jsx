import React, { useEffect, useState } from 'react';
import { getRandomNum } from './compFunctions';
import axios from 'axios';
import { CharCard } from './CharCard';


const App = () => {
  //! STATES
    //DIMENSION DATA
  const [dimensionInfo, setDimensionInfo] = useState(null);

    //DIMENSION CHANGER DATA
  const [dataChanger, setDataChanger] = useState(getRandomNum(1, 126))

    //HANDLER NUM
  const [handler, setHandler] = useState("")


  //! FUNCTIONS
  const getApiData = async (value) => {
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/location/${value}`
      );
      setDimensionInfo(res.data);
      console.log(dimensionInfo);
    } catch (error) {
      console.log(error);
    }
  };

    //SUBMIT HANDLER
  const handlerSubmit = async (e) => {
    e.preventDefault()
    if(handler > 0){
      getApiData(handler)
      setHandler("")
    }
    
  }

    //ON CHANGE HANLDER
  const onChangeHandler = (e) => {
    if(e.target.value <= 126) {
      setHandler(e.target.value)
    }
    
  }


  //USE EFFECTS
  useEffect(() => {
    getApiData(dataChanger);
    console.log(dimensionInfo);

  }, []);
  console.log(dimensionInfo);
  
  // console.log(dimensionInfo);

  // RENDER HTML/JSX
  return (
    <div className='flex flex-col justify-center relative items-center w-full bg-neutral-900'>
      <div className='flex justify-center absolute -top-5 h-10 w-72 rounded-r-full bg-lime-200'>
        <form className='justify-center flex gap-3 overflow-hidden' action="" onSubmit={handlerSubmit}>
          <input className=' pl-4 placeholder-gray-900  border-r-2 border-gray-300 bg-lime-300' type="text" placeholder='Type a value 1-126' onChange={onChangeHandler} value={handler} />
          <input className='mr-4 py-2 pr-10' type="submit" value={"Search"}/>
        </form>
      </div>
        <div className='flex flex-col lg:flex-row lg:gap-10 mt-10 text-white'>
          <p className='text-green-600 font-bold'>Name: <span className='text-green-500'>{dimensionInfo?.name}</span> </p>
          <p className='text-green-600 font-bold'>Type of Dimesion: <span className='text-green-500'>{dimensionInfo?.type}</span> </p>
          <p className='text-green-600 font-bold'>Poblation: <span className='text-green-500'>{dimensionInfo?.residents.length}</span> </p>
        </div>
      <div className="bg-neutral-900 h-full w-10/12 flex-wrap flex flex-row justify-center gap-8 items-center p-10 text-white">
          {dimensionInfo?.residents.map((resident) => <CharCard key={resident} resident={resident} />) }
          
      </div>
    </div>
  );
};

export default App;
