import data from '../data/champions.json'
export default function Home() {
  return (
    <main className="flex w-full h-full overflow-hidden justify-center align-middle">
      <header className="w-full mx-2 flex justify-between items-center h-14 bg-neutral-900"> 
        <div>
          <input type="text" autoFocus className="w-max mx-2 bg-neutral-800 rounded border"></input>
        </div>
      </header>
      <ChampionList />
    </main>
  )
}

/* To do:
  -[] Header 
  -[] all champions icons
*/

function ChampionList() {
  return (
    <div className='flex flex-row items-center justify-between'>
      {Object.keys(data.data).map((champion) => (
          <img src={`https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${champion}.png`} className='w-10 mx-1 h-10' />
      ))
      }
    </div>
  )
}

