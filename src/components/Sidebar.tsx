import {House, Search, Library,} from 'lucide-react'

export function Sidebar(){
    return(
        <aside className="w-64 bg-zinc-950 p-6">
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 bg-red-500 rounded-full cursor-pointer'/>
          <div className='w-3 h-3 bg-yellow-500 rounded-full cursor-pointer'/>
          <div className='w-3 h-3 bg-green-500 rounded-full cursor-pointer'/>
        </div>

        <nav className='space-y-5 mt-10'>
          <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'><House/>
            Home
          </a>
          <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'><Search/>
            Search
          </a>
          <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'> <Library/>
            Your Library
          </a>
        </nav>
        <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Flashback's Songs</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Mood Vibe</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>90s Rock</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Country Hits</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Eletro Vibe</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Randomize</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Gospel Songs</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hits</a>
        </nav>
      </aside>
    )
}