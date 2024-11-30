import NavBar from './components/NavBar'

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
      </section>
    </div>
  )
}
