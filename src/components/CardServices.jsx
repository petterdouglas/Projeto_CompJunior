import React from 'react'
import style from './CardServices.module.css'
import Lupa from '../assets/icon-lupa.png'
import Tablet from '../assets/icon-tablet.png'
import Tablet2 from '../assets/icon-tablet2.png'
import H1Line from '../assets/h1-line.svg'

const CardServices = ({ alterna }) => {

    function alternaSobre() {
        alterna('Sobre')
    }

    return (
        <>
            <section id='services' className={style.services_section}>
                <h1>Nossos serviços</h1>
                <img id={style.services_h1_line} src={H1Line} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vitae. Omnis in enim officiis dolor fugit
                    eaque minus, labore voluptas!</p>
                <div className={style.services_section_types}>
                    <div>
                        <img width="91.98px" height="90px" src={Lupa} alt="lupa" />
                        <h2>Web estático</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa atque, provident ipsum sunt quia doloremque?</p>
                    </div>
                    <div>
                        <img width="67.08px" height="95px" src={Tablet} alt="document" />
                        <h2>Web dinâmico</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa atque, provident ipsum sunt quia doloremque?</p>
                    </div>
                    <div>
                        <img width="67.08px" height="95px" src={Tablet} alt="tablet" />
                        <h2>Mobile</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa atque, provident ipsum sunt quia doloremque?</p>
                    </div>
                    <div>
                        <img width="67.08px" height="95px" src={Tablet2} alt="tablet2" />
                        <h2>Softwares</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa atque, provident ipsum sunt quia doloremque?</p>
                    </div>
                    <div>
                        <img width="67.08px" height="95px" src={Tablet} alt="tablet" />
                        <h2>Data science</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa atque, provident ipsum sunt quia doloremque?</p>
                    </div>
                    <div>
                        <img width="67.08px" height="95px" src={Tablet2} alt="tablet2" />
                        <h2>Marketing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa atque, provident ipsum sunt quia doloremque?</p>
                    </div>
                </div>
                <button className="saber-mais" onClick={alternaSobre}>Saber mais</button>
            </section>
        </>
    )
}

export default CardServices