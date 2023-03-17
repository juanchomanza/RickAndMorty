import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const CharCard = ({resident}) => {
    const [charInfo, setCharInfo] = useState(null)

    
    
    const getInfoRasident = async () => {
        try{
            const res = await axios.get(resident)
            setCharInfo(res.data)
            // console.log(charInfo)
        }catch(e) {
            console.log(e)
        }
    } 
    
    useEffect(()=>{
        getInfoRasident()
    },[])

  return( 
    <div className='bg-neutral-700 flex flex-col w-72 card hover:shadow-green-900 hover:shadow-md relative'>
        <div>
            <img className='w-72' src={charInfo?.image} alt="" />
        </div>
        <div className='flex absolute -top-3'>
            <h2 className='text-2xl overflow-auto yellowBg pr-6 text-slate-800 pl-1 rounded-r-2xl font-bold'>{charInfo?.name}</h2>
        </div>
        <div className='flex absolute right-0 top-56 bg-gray-700 pl-5 rounded-l-2xl justify-end'>
            <h2 className='pr-1'>{charInfo?.status} </h2>
        </div>
        <div className='flex flex-col pt-3'>
            <div className='w-2/2 border-cyan-700 pb-2 border-b-2 flex flex-col justify-center items-center'>
                <h2 className='font-bold'>-Specie-</h2>
                <p>{charInfo?.species} </p>
            </div>
            <div className='w-2/2 pt-2 pb-2 border-cyan-600 border-b-2 flex flex-col justify-center items-center'>
                <h2 className='font-bold'>-Origin-</h2>
                <p>{charInfo?.origin.name} </p>
            </div>
            <div className='w-2/2 pt-2 pb-2 border-cyan-600 border-b-2 flex flex-col justify-center items-center'>
                <h2 className='font-bold'>-Appear in episodes-</h2>
                <p>{charInfo?.episode.length} </p>
            </div>
        </div>
        
    </div>
  )
}
