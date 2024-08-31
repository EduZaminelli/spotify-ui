import { Sidebar } from '@/components/sidebar';
import { Footer } from '@/components/footer';
import { Main } from '@/components/Main';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar/>
        <Main/>
      </div>
      <Footer/>
    </div>
  )
}
