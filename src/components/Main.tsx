import { ChevronLeft, ChevronRight, Play, } from 'lucide-react'
import Image from 'next/image';

export function Main (){
    return(
        <main className="bg-gradient-to-b from-green-950 to-black flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='p-1 rounded-full bg-black/40'>
              <ChevronLeft/>
            </button>
            <button className='p-1 rounded-full bg-black/40'>
              <ChevronRight/>
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'><Image src="/album1.jpg" width={104} height={104} alt="Capa Album"/>
            <strong>Echoes of Tomorrow</strong>
            <button className='p-2 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play fill='bg-black'/>
            </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'><Image src="/album2.jpg" width={104} height={104} alt="Capa Album"/>
            <strong>Midnight Reverie</strong>
            <button className='p-2 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play fill='bg-black'/>
            </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'><Image src="/album3.jpg" width={104} height={104} alt="Capa Album"/>
            <strong>Neon Dreams</strong>
            <button className='p-2 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play fill='bg-black'/>
            </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'><Image src="/album4.jpg" width={104} height={104} alt="Capa Album"/>
            <strong>Whispers in the Dark</strong>
            <button className='p-2 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play fill='bg-black'/>
            </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'><Image src="/album5.jpg" width={104} height={104} alt="Capa Album"/>
            <strong>Celestial Wanderer</strong>
            <button className='p-2 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play fill='bg-black'/>
            </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'><Image src="/album6.jpg" width={104} height={104} alt="Capa Aluim"/>
            <strong>Fragments of Time</strong>
            <button className='p-2 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play fill='bg-black'/>
            </button>
            </a>
          </div>
          <h2 className='font-semibold text-2xl mt-10'>Made for Eduardo Zaminelli</h2>
          <div className='grid grid-cols-5 gap-4 mt-4'>
              <a href='#' className='relative bg-white/5 p-3 rounded-md hover:bg-white/10 group'>
              <Image src="/album7.jpg" className='w-full' width={120} height={120} alt="Capa Album"/>
              <button className='absolute bottom-24 right-6 px-2 py-2 rounded-full bg-green-500 text-black invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
              <strong className='font-semibold' >Daily Mix 1</strong>
              <span className='text-sm text-zinc-500 flex flex-col gap-2'>Nebula Pulse, Wallows, Pheonix, Velvet Spectrum and more</span>
            </a>

            <a href='#' className='relative bg-white/5 p-3 rounded-md hover:bg-white/10 group'>
              <Image src="/album8.jpg" className='w-full' width={120} height={120} alt="Capa Album"/>
              <button className='absolute bottom-24 right-6 px-2 py-2 rounded-full bg-green-500 text-black invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
              <strong className='font-semibold' >Daily Mix 2</strong>
              <span className='text-sm text-zinc-500 flex flex-col gap-2'>Sonic Mirage, Aurora, Whisper, Mobb Deep and more</span>
            </a>
            
            <a href='#' className='relative bg-white/5 p-3 rounded-md hover:bg-white/10 group'>
              <Image src="/album9.jpg" className='w-full' width={120} height={120} alt="Capa Album"/>
              <button className='absolute bottom-24 right-6 px-2 py-2 rounded-full bg-green-500 text-black invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
              <strong className='font-semibold' >Daily Mix 3</strong>
              <span className='text-sm text-zinc-500 flex flex-col gap-2'>Serenade, Vortex, Sonic Mirage, Radiant and more</span>
            </a>
            
            <a href='#' className='relative bg-white/5 p-3 rounded-md hover:bg-white/10 group'>
              <Image src="/album10.jpg" className='w-full' width={120} height={120} alt="Capa Album"/>
              <button className='absolute bottom-24 right-6 px-2 py-2 rounded-full bg-green-500 text-black invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
              <strong className='font-semibold' >Daily Mix 4</strong>
              <span className='text-sm text-zinc-500 flex flex-col gap-2'>Eclipse Reverie, Odyssey, Abyss, Crimson and more</span>
            </a>
            
            <a href='#' className='relative bg-white/5 p-3 rounded-md hover:bg-white/10 group'>
              <Image src="/album11.jpg" className='w-full' width={120} height={120} alt="Capa Album"/>
              <button className='absolute bottom-24 right-6 px-2 py-2 rounded-full bg-green-500 text-black invisible group-hover:visible'>
                  <Play fill='bg-black'/>
              </button>
              <strong className='block font-semibold mt-2'>Daily Mix 5</strong>
              <span className='text-sm text-zinc-500 flex flex-col gap-2 mt-1'>Quantum Shadow, Astral, Echo, Nova and more</span>
            </a>
            
          </div>
        </main>
    )
}