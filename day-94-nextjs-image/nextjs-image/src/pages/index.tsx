import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/Button'
import FancyButton from '@/components/FancyButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
      <FancyButton>Fancy Click</FancyButton>
      {/* <Image 
      src="https://images.unsplash.com/photo-1680695918112-2909e0fc8796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" 
      alt="" 
      fill
      style={{objectFit: "cover"}}
      /> */}
    </div>
  )
}
