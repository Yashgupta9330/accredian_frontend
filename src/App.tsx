import './App.css'
import Referal from './components/Benifits/Referal'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
import Get from './components/Get/Get'
import Hero from './components/Hero/Hero'
import Options from './components/Hero/Options'
import HowRefer from './components/HowRefer/HowRefer'
import Navbar from './components/Nav/Navbar'
import Top from './components/top/Top'

function App() {
 

  return (
    <div className="min-h-screen flex flex-col w-full">
       <Top/>
      <Navbar/>
      <Options/>
      <Hero/>
      <HowRefer/>
      <Referal/>
      <Faq/>
      <Get/>
      <Footer/>
    </div>
  )
}

export default App
