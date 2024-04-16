import "./Footer.css"

const Footer = () => {
    let date =new Date().getFullYear()
    return (
        <footer>
            <span className="texto-copyright">
                copyright &copy; {date} - Todos os Direitos Reservados - ABATRA - Associação Brasileira de Amparo aos Trabalhadores; 
            </span>
        </footer>
    )
}

export default Footer


