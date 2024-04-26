import "./Principal.css"





const Main = () => {
    return (
        <section className="main__content">


            <p>ESSE É UM <br />DIREITO SEU!</p>
            <button className="btn__main" onClick={() => window.scrollTo({ top: 920, behavior: "smooth" })}>SAIBA MAIS</button>






        </section>
    )
}

export default Main