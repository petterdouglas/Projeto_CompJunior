import Home from '../assets/home_img.png'
import DescriptionImg from '../assets/description_img.png'
import H1Line from '../assets/h1-line.svg'
import NossosValores from '../assets/values_img.png'
import Mission from '../assets/mission_img.png'
import CardServices from '../components/CardServices'
import Navbar from '../components/Navbar'
import './LandingPage.css'
import CasesSucesso from '../components/CasesSucesso'
import Formulario from '../components/Formulario'
import Footer from '../components/Footer'
import Sobre from './Sobre'

const LandingPage = ({alterna}) => {

    function alternaSobre (){
        alterna('Sobre')
    }
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="home-section">
                    <div className="home-section_contents">
                        <h1>Criatividade jovem, compromisso profissional</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam rem ratione labore eveniet delectus
                            in
                            consequatur accusamus adipisci nihil, consectetur aliquam cum vitae cupiditate aspernatur eligendi
                        </p>
                        <button className="home-section_btn" href="#">Solicitar orçamento</button>
                    </div>
                    <div className="home-section_img-container">
                        <img id="home-section_img" src={Home} alt="Garota estudante usando um notebook" />
                    </div>
                </section>
                <CardServices alterna={alterna}/>
                <section className="description-section">
                    <img src={DescriptionImg} alt="Homem codando com imagem de um prototipo html ao fundo" />
                    <div className="description-section_content">
                        <h1>O que é uma Empresa Junior</h1>
                        <img id="description-h1_line" src={H1Line} alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quos corrupti quo id deleniti
                            maxime esse cupiditate rerum nemo. Sit culpa nam at quod ipsam voluptates praesentium sunt natus
                            provident!</p>
                        <button className="saber-mais" onClick={alternaSobre}>Saber mais</button>
                    </div>
                </section>
                <section id='values' className="values-section">
                    <div className="values-section_content">
                        <h1>Nossos valores</h1>
                        <img id="values-h1_line" src={H1Line} alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate ex, odio possimus repellendus
                            soluta
                            officia eveniet velit recusandae quia at maiores, atque fugit!
                        </p>
                        <button className="saber-mais" onClick={alternaSobre}>Saber mais</button>
                    </div>
                    <img src={NossosValores} alt="Equipe dando as mãos" />
                </section>
                <section id='missions' className="mission-section">
                    <img src={Mission} alt="Mulher codando" />
                    <div className="mission-section_content">
                        <h1>Qual é a nossa missão</h1>
                        <img id="mission-h1_line" src={H1Line} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod ipsam delectus dolore officiis
                            cupiditate eligendi rem quia repudiandae suscipit?</p>
                        <button className="saber-mais" onClick={alternaSobre}>Saber mais</button>
                    </div>
                </section>
                <CasesSucesso />
                <Formulario />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default LandingPage