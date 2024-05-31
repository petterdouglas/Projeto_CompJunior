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
                <p>Logo abaixo estão alguns de nossos principais serviços</p>
                <div className={style.services_section_types}>
                    <div>
                        <img src={Lupa} alt="lupa" />
                        <h2>Web site estático</h2>
                        <p>Destaque-se online com um website estático com design elegante e funcionalidade intuitiva. Nossa equipe especializada cria sites que refletem a identidade da sua marca, oferecendo uma experiência de usuário excepcional. Desde páginas informativas até portfólios online, estamos aqui para transformar sua visão em realidade digital.
                        </p>
                    </div>
                    <div>
                        <img src={Tablet} alt="document" />
                        <h2>Sistema dinâmico</h2>
                        <p>Aumente o engajamento com um site dinâmico personalizado. Nossa equipe utiliza as mais recentes tecnologias para criar experiências online dinâmicas e envolventes. De blogs interativos a lojas virtuais avançadas, estamos aqui para impulsionar a sua presença digital.</p>
                    </div>
                    <div>
                        <img src={Tablet} alt="tablet" />
                        <h2>Mobile</h2>
                        <p>Desenvolvemos aplicações mobiles e cuidados técnicos que possibilitam uma experiência agradável durante a navegação ao usuário, tudo isso com base no foco nas necessidades do seu cliente e negócio.
                        </p>
                    </div>
                    <div>
                        <img src={Tablet2} alt="tablet2" />
                        <h2>Análise de dados</h2>
                        <p>Obtenha insights valiosos sobre seu negócio com nossa análise de dados personalizada. Identificamos padrões, tendências e oportunidades ocultas em seus dados para ajudá-lo a tomar decisões informadas e impulsionar o crescimento do seu negócio.</p>
                    </div>
                    <div>
                        <img src={Tablet} alt="tablet" />
                        <h2>Data science</h2>
                        <p>Potencialize o poder dos seus dados com nossa consultoria em ciência de dados. Nossa equipe especializada utiliza técnicas avançadas de análise e modelagem para extrair informações relevantes e criar soluções personalizadas para o seu negócio.</p>
                    </div>
                    <div>
                        <img src={Tablet2} alt="tablet2" />
                        <h2>Marketing</h2>
                        <p>Maximize o alcance e o impacto da sua marca com nossa consultoria em marketing digital. Utilizando estratégias personalizadas e análise de dados, ajudamos você a identificar oportunidades, otimizar campanhas e aumentar o engajamento do seu público-alvo</p>
                    </div>
                </div>
                <About bannerHash={'services'} />
            </section>
        </>
    )
}

export default CardServices