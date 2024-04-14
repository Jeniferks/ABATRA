import "./Header.css"
// import React from "React";
import Logo from "../../assets/2.png";

const Header = () => {

    return (
        
            
        <header className="header__menu">
            
            <div>
                <img className="main__logo" src={Logo} alt="main_logo"/>
            </div>


            <div className="header__nav">
                <nav>Home</nav>
                <nav>Beneficios</nav>
            
                <nav>Links Uteis</nav>
                <nav>Contato</nav>
            </div>
            
        </header>
        
        
    )
}

export default Header



{/* <img className="logo" src="../src/assets/2.png" alt="abatra"/>
            <nav>Home</nav>
            <nav>Beneficios</nav>
            <nav>Perguntas Frequentes</nav>
            <nav>Links Uteis</nav>
            <nav>Contato</nav>             */}