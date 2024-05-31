import { Link } from 'react-router-dom'

// imagens
import Home from '../assets/home_img.png'
import DescriptionImg from '../assets/description_img.png'
import H1Line from '../assets/h1-line.svg'
import NossosValores from '../assets/values_img.png'
import Mission from '../assets/mission_img.png'

// components
import CardServices from '../components/CardServices'
import './LandingPage.css'
import CasesSucesso from '../components/CasesSucesso'
import Formulario from '../components/Formulario'
import About from '../components/ButtonAbout'

const LandingPage = () => {

    return (
        <>
            <main id='home'>
                <section className="home-section">
                    <div className="home-section_contents">
                        <h1>Criatividade jovem, compromisso profissional</h1>
                        <p>Na Comp Junior, estamos comprometidos com a execelência e alta performance. Aqui oferecemos uma ampla gama de serviços personalizados, desde a criação de sites estáticos e dinâmicos até a análise de dados e desenvolvimento de aplicativos móveis. Caso interessado(a), em contato conosco!
                        </p>
                        <Link to="/#contacts" className="home-section_btn" >Solicitar orçamento</Link>
                    </div>
                    <img id="home-section_img" src={Home} alt="Garota estudante usando um notebook" />
                </section>
                <CardServices />
                <section className="description-section">
                    <img src={DescriptionImg} alt="Homem codando com imagem de um prototipo html ao fundo" />
                    <div className="description-section_content">
                        <h1>O que é uma Empresa Junior</h1>
                        <img id="description-h1_line" src={H1Line} alt="" />
                        <p>Uma empresa júnior é uma organização estudantil formada por alunos universitários que oferecem serviços profissionais de consultoria e desenvolvimento para empresas e organizações externas, operando sob a orientação de professores e profissionais do mercado.
                        </p>
                        <About bannerHash={'description'} />
                    </div>
                </section>
                <section id='values' className="values-section">
                    <div className="values-section_content">
                        <h1>Nossos valores</h1>
                        <img id="values-h1_line" src={H1Line} alt="" />
                        <p>
                            Na Comp Junior, valores como colaboração, inovação e comprometimento são fundamentais. Buscamos sempre a excelência em nossos serviços, priorizando a satisfação dos clientes e o desenvolvimento contínuo de nossa equipe.
                        </p>
                        <About bannerHash={'missions_and_values'} />
                    </div>
                    <img src={NossosValores} alt="Equipe dando as mãos" />
                </section>
                <section id='missions' className="mission-section">
                    <img src={Mission} alt="Mulher codando" />
                    <div className="mission-section_content">
                        <h1>Qual é a nossa missão</h1>
                        <img id="mission-h1_line" src={H1Line} alt="" />
                        <p>Nossa missão é transformar desafios em oportunidades, fornecendo soluções tecnológicas inteligentes e acessíveis que atendam às necessidades específicas de cada cliente. Na Comp Junior, acreditamos que a inovação é a chave para o progresso, e estamos empenhados em ajudar sua empresa a alcançar seus objetivos de forma eficiente e eficaz.</p>
                        <About bannerHash={'missions_and_values'} />
                    </div>
                </section>
                <CasesSucesso />
                <Formulario />
            </main>
        </>
    )
}

export default LandingPage