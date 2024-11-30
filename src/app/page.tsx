import CardSlider from './components/CardSlider'
import HeroSlider from './components/HeroSlider'
import HeroText from './components/HeroText'
import NavBar from './components/NavBar'
import SectionLayout from './components/SectionLayout'

export default function Home() {
  return (
    <div className="d-relative">
      <section
        className="min-h-screen min-w-screen"
        style={{
          backgroundColor: `rgb(1, 212, 255)`,
          background: `linear-gradient(138deg, rgba(1, 212, 255, 1)46%, rgba(8, 137, 215, 0.8921860980720413)100%)`,
        }}
      >
        <NavBar />
        <SectionLayout>
          <div className="flex flex-col align-center justify-between min-w-full min-h-full py-40 gap-4 sm:flex-row">
            <HeroText />
            <HeroSlider />
          </div>
          <CardSlider />
        </SectionLayout>
      </section>
    </div>
  )
}
