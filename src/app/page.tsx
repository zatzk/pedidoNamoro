import { YesButton, NoButton } from '@/components/Buttons'
import backgroundGif from '/public/shrek.gif'

export default function Home() {
  return (
    <main className="h-screen">
      <div
        className="h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundGif})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'contain',
        }}
      >
        <h1 className="text-white text-4xl font-bold">Aceitas... namorar comigo?</h1>
        <div className="text-white text-4xl font-bold">
          <p className="flex text-3xl justify-center">😳</p>
          <p className="flex text-3xl justify-center">👉👈</p>
          
          </div>
        <div className="flex">
          <YesButton />
          <NoButton />
        </div>
      </div>
    </main>
  )
}
