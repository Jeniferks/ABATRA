
import './App.css'
import Header from './Components/Header/Header'
import Principal from './Components/Principal/Principal'
import  Footer  from './Components/Footer/Footer'
import Sobre from './Components/Sobre/Sobre'
import Beneficios from './Components/Beneficios/Beneficios'
// import Depoimentos from './Components/Depoimentos/Depoimentos'
import Contato from './Components/Contato/Contato'

function App() {
  
  return (
    <>
      <Header/>
      <Principal/>
      <Sobre/>
      <Beneficios/>
      {/* <Depoimentos/> */}
      <Contato/>
      <Footer/>

      <a
        href="https://wa.me/+5548988521521"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>

    </>
  )
}

export default App
