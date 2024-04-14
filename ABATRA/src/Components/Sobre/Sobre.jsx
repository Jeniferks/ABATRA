import "./Sobre.css";
import Logo from "../../assets/3.png"

const Sobre = () => {
  return <div className="about__container">

    <div className="about_left__container">
    <img className="about__logo" src={Logo} alt="about_logo"/>
          
      <h1 className="titulo__sobre">SOBRE NÓS</h1>
      <p className="sobre__descricao">Somos uma associação dedicada a auxiliar na obtenção dos seus direitos previdenciários. Nossa equipe oferece suporte para que os trabalhadores recebam o que é devido. Conte conosco para garantir que você receba os benefícios que merece, de maneira rápida e descomplicada.</p>
    </div>
    <div className="about_right__container"></div>

        </div>
};

export default Sobre;
