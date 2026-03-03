import ReactLenis from "lenis/react"
import Hero from "./layout/Hero"
import Benefits from "./layout/Benefits"
import Contents from "./layout/Contents"
import Community from "./layout/Community"
import Price from "./layout/Price"
import Faq from "./layout/Faq"
import Notices from "./layout/Notices"
import Footer from "./layout/Footer"
function App() {
  return (
    <ReactLenis 
      root 
      options={{
        lerp: 0.1, // Suavidade (0 a 1). Quanto menor, mais suave (e mais "lento" o rastro). Padrão é 0.1
        duration: 1.2, // Duração do scroll em segundos
        smoothWheel: true, // Ativa para mouse/trackpad
        smoothTouch: false, // Recomendação: mantenha false para mobile (deixe o scroll nativo agir)
      }}
    >
    <main className="overflow-x-hidden">
      <Hero/>
      <Benefits/>
      <Contents/>
      <Community/>
      <Price/>
      <Faq/>
      <Notices/>
      <Footer/>
    </main>
    </ReactLenis>
  )
}

export default App
