import {Shuffle, Play, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, VolumeIcon, Volume2, Maximize2} from 'lucide-react'
import Image from 'next/image';

export function Footer(){
    return(
        <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <Image className='cursor-pointer' src="/album12.jpg" width={56} height={56} alt="Capa Album"/>
          <div className='flex flex-col'>
            <strong className='font-normal text-zinc-200 hover:underline hover:text-white decoration-1 cursor-pointer'>Flux</strong>
            <span className='text-xs text-zinc-400 cursor-pointer hover:underline decoration-1 hover:text-zinc-200'>Digital Daydreams</span>
          </div>
        </div>

        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6 cursor-pointer'>
            <Shuffle size={20} className='text-green-600'/>
            <SkipBack size={20} className='text-zinc-300 fill-zinc-300'/>
            <button className='w-10 h-10 flex items-center justify-center rounded-full bg-white text-black'>
              <Play fill='bg-black'/>
            </button>
            <SkipForward size={20} className='text-zinc-300 fill-zinc-300'/>
            <Repeat size={20} className='text-zinc-300'/>
          </div>

          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:37</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-20 h-1 rounded-full hover:bg-green-600 cursor-pointer duration-75'></div>
            </div>
            <span className='text-xs text-zinc-400'>3:05</span>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <Mic2 className='cursor-pointer' size={20}/>
          <LayoutList className='cursor-pointer' size={20}/>
          <Laptop2 className='cursor-pointer' size={20}/>
          <div className='flex items-center gap-2'>
            <Volume2 className='cursor-pointer' size={20}/>
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-16 h-1 rounded-full hover:bg-green-600 cursor-pointer duration-75'></div>
            </div>
          </div>
          <Maximize2 className='cursor-pointer' size={20}/>
        </div>
      </footer>
    )
}