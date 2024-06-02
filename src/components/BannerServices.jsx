import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

//imagens
import Imagem from '../assets/services_about_img.png'

const BannerServices = () => {



    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash)
            if (element) {
                element.scrollIntoView()
            }
        }
    }, [location])

    return (
        <main id='inicio'>
            <section className='sobre_container'>
                <img src={Imagem} alt="imagem" width='780px' height='400px' />
                <h1 className='sobre_container_title'>Nossos serviços</h1>
                <div>
                    <h2 className='sobre_container_caption_add'>Criação de Websites Estáticos Personalizados</h2>
                    <p>
                        Destaque-se online com um website estático que combina design elegante e funcionalidade intuitiva. Nossa equipe especializada cria sites que refletem a identidade da sua marca, oferecendo uma experiência de usuário excepcional. Desde páginas informativas até portfólios online, estamos aqui para transformar sua visão em realidade digital.
                    </p>
                </div>
                <div>
                    <h2 className='sobre_container_caption_add'>Sites Dinâmicos Sob Medida</h2>
                    <p>
                        Aumente o engajamento e a interatividade com um site dinâmico personalizado pela Comp Junior. Nossa equipe de desenvolvimento utiliza as mais recentes tecnologias para criar experiências online dinâmicas e envolventes. De blogs interativos a lojas virtuais avançadas, estamos aqui para impulsionar a sua presença digital.
                    </p>
                </div>
                <div>
                    <h2 className='sobre_container_caption_add'>Consultoria em Marketing Digital</h2>
                    <p>
                        Maximize o alcance e o impacto da sua marca com nossa consultoria em marketing digital. Utilizando estratégias personalizadas e análise de dados, ajudamos você a identificar oportunidades, otimizar campanhas e aumentar o engajamento do seu público-alvo, impulsionando o crescimento do seu negócio.
                    </p>
                </div>
                <div>
                    <h2 className='sobre_container_caption_add'>Consultoria em Ciência de Dados</h2>
                    <p>
                        Potencialize o poder dos seus dados com nossa consultoria em ciência de dados. Nossa equipe especializada utiliza técnicas avançadas de análise e modelagem para extrair informações relevantes e criar soluções personalizadas que impulsionam a eficiência e o sucesso do seu negócio.
                    </p>
                </div>
                <div>
                    <h2 className='sobre_container_caption_add'>Análise de Dados Sob Medida</h2>
                    <p>
                        Obtenha insights valiosos sobre seu negócio com nossa análise de dados personalizada. Identificamos padrões, tendências e oportunidades ocultas em seus dados para ajudá-lo a tomar decisões informadas e impulsionar o crescimento do seu negócio.
                    </p>
                </div>
                <div>
                    <h2 className='sobre_container_caption_add'>Criação de aplicativos mobiles interativos</h2>
                    <p>
                        Desenvolvemos aplicativos móveis sob medida para atender às necessidades do seu negócio, proporcionando uma experiência única aos seus usuários. Transforme sua ideia em realidade e alcance seu público onde quer que ele esteja, com inovação e qualidade garantidas pela Comp Junior.
                    </p>
                </div>

            </section>
            <section className='doubts_container'>
                <h1 className='doubts_container_title'>Ficou em dúvida sobre algo?</h1>
                <h2 className='doubts_container_caption'>Vamos conversar sobre!</h2>
                <Link to='/#contacts' onClick={() => handleNavClick('/#contacts')}>Entrar em contato</Link>
            </section>
        </main>
    )
}

export default BannerServices