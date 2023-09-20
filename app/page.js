import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Narbar from '@/components/Narbar'
import Spec from '@/components/Spec'
import Image from 'next/image'

export default function Home() {
  return (
   <div >
   <Narbar />
   <Hero />
   <Spec/>
   <Footer/>
   </div>
  )
}
