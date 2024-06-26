import "./Sobre.css";
// import Logo from "../../assets/3.png";
import logoHorizontal from "../../assets/logo-vertical.png"

const Sobre = () => {
  return <section className="about__container">

    <div className="about_left__container">
    {/* <img className="about__logo" src={Logo} alt="about_logo"/> */}
          
      <h1 className="titulo__sobre">SOBRE NÓS</h1>
      <p className="sobre__descricao">Somos uma associação dedicada a auxiliar na obtenção dos seus direitos previdenciários. Nossa equipe oferece suporte para que os trabalhadores recebam o que é devido. Conte conosco para garantir que você receba os benefícios que merece, de maneira rápida e descomplicada.</p>
      <button className="btn__beneficios" onClick={() => window.scrollTo({ top: 1900, behavior: "smooth" })}>Benefícios</button>
    </div>
    <div className="about_right__container">
        <img className="logoHorizontal" src={logoHorizontal} alt="logoHorizontal"/>
    </div>

        </section>
};

export default Sobre;
