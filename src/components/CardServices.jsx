import React from 'react'

//estilos
import style from './CardServices.module.css'

//imagens
import Lupa from '../assets/icon-lupa.png'
import Tablet from '../assets/icon-tablet.png'
import Tablet2 from '../assets/icon-tablet2.png'
import H1Line from '../assets/h1-line.svg'
import About from './ButtonAbout'

const CardServices = () => {

    return (
        <>
            <section id='services' className={style.services_section}>
                <h1>Nossos serviços</h1>
                <img id={style.services_h1_line} src={H1Line} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vitae. Omnis in enim officiis dolor fugit
                    eaque minus, labore voluptas!</p>
                <div className={style.services_section_types}>
                    <div>
                        <img src={Lupa} alt="lupa" />
                        <h2>Web site</h2>
                        <p>Desenvolvimento de páginas web estáticas ou dinâmicas, com layout que responde a diferentes tamanhos de telas. Pensamos em cada etapa de forma a criar a melhor solução para a sua ideia.</p>
                    </div>
                    <div>
                        <img src={Tablet} alt="document" />
                        <h2>Sistema dinâmico</h2>
                        <p>Os sistemas web com foco em gerenciamento, lógica de negócio e desenvolvimento aprimorado são pensados para que os resultados de sua implementação sejam efetivos e cumpram todas as demandas do seu negócio.</p>
                    </div>
                    <div>
                        <img src={Tablet} alt="tablet" />
                        <h2>Mobile</h2>
                        <p>Desenvolvimento de aplicações mobiles, muito utilizadas nos dias de hoje. Oferecemos cuidados técnicos que possibilitam uma experiência agradável durante a navegação ao usuário, tudo isso é feito com base em um estudo com foco nas necessidades do seu cliente e negócio.
                        </p>
                    </div>
                    <div>
                        <img src={Tablet2} alt="tablet2" />
                        <h2>Análise de dados</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa atque, provident ipsum sunt quia doloremque?</p>
                    </div>
                    <div>
                        <img src={Tablet} alt="tablet" />
                        <h2>Data science</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa atque, provident ipsum sunt quia doloremque?</p>
                    </div>
                    <div>
                        <img src={Tablet2} alt="tablet2" />
                        <h2>Marketing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa atque, provident ipsum sunt quia doloremque?</p>
                    </div>
                </div>
                <About bannerHash={'services'} />
            </section>
        </>
    )
}

export default CardServices