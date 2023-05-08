'use client';
import React, { useState } from 'react';
import data from '../data/champions.json'
export default function Home() {
  return (
    <main className="flex bg-neutral-900 flex-col w-full h-full overflow-hidden justify-center align-middle">
      <header className="border-y border-y-neutral-800 w-full mx-2 flex justify-center  items-center h-14 bg-neutral-900"> 
        <div>
          <input type="text" autoFocus className="w-max mx-2 border-neutral-700 focus:outline-none bg-neutral-800 rounded border"></input>
        </div>
      </header>
      <ChampionList />
    </main>
  )
}

/* To do:
  -[X] Header 
  -[X] all champions icons
  -[ ] search bar
  -[ ] champion hover info
*/

function ChampionList() {
  const [selChampion, setSelChampion] = useState<string | null>(null);
  const handleClick = (champion: string) => {
    setSelChampion(selChampion === champion ? null : champion);
  }
  
  const championPanel = () => {
    if (selChampion) {
      return (
        <div className='bg-gray-100 p-4 mt-4 rounded shadow'>
          <h2> {selChampion} </h2>
        </div>
      )
    }
    return null;
  }
  
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 items-center justify-between'>
      {Object.keys(data.data).map((champion) => (
        <div onClick={() => handleClick(champion)} className='flex flex-col justifyt-center items-center'>
          <img 
            src={`https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${champion}.png`}
            className='w-20 h-20 transition-transform duration-300 ease-in-out hover:transform hover:scale-150' />
        </div>
        ))
      }
      {championPanel()}
    </div>
  )
}

