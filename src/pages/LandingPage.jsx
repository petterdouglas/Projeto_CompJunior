import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

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
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (!location.hash) {
            navigate('/')
        } else {
            location.hash = null
        }
    }, []);

    return (
        <>
            <main id='home'>
                <section className="home-section">
                    <div className="home-section_contents">
                        <h1>Criatividade jovem, compromisso profissional</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam rem ratione labore eveniet delectus
                            in
                            consequatur accusamus adipisci nihil, consectetur aliquam cum vitae cupiditate aspernatur eligendi
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
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quos corrupti quo id deleniti maxime esse cupiditate rerum nemo. Sit culpa nam at quod ipsam voluptates praesentium sunt natus provident!
                        </p>
                        <About bannerHash={'description'} />
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
                        <About bannerHash={'missions_and_values'} />
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