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
  )
}

export default App
