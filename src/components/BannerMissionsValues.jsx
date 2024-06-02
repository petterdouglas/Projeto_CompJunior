import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

//imagens
import Imagem from '../assets/missionandvalues_about_img.jpg'

const BannerMissionsValues = () => {

    return (
        <main id='inicio'>
            <section className='sobre_container'>
                <img src={Imagem} alt="imagem" width='780px' height='400px' />
                <h1 className='sobre_container_title'>Mission and Values</h1>
                <h2 className='sobre_container_caption'>Abaixo estão mais informações sobre nossos valores e qual nossa missão como Empresa Junior </h2>
                <div>
                    <h2 className='sobre_container_caption_add'>Excelência</h2>
                    <p>Buscamos sempre a excelência em tudo o que fazemos. Desde o primeiro contato até a entrega final do projeto, estamos comprometidos em oferecer resultados de alta qualidade que superem as expectativas dos nossos clientes.</p>
                </div>
                <div>
                    <h2 className='sobre_container_caption_add'>Inovação</h2>
                    <p>Acreditamos no poder da inovação para impulsionar o progresso. Estamos constantemente explorando novas tecnologias e metodologias para oferecer soluções criativas e eficazes que agreguem valor aos nossos clientes.
                    </p>
                </div>
                <div>
                    <h2 className='sobre_container_caption_add'>Colaboração</h2>
                    <p>Valorizamos o trabalho em equipe e a colaboração. Acreditamos que o melhor resultado é alcançado quando todos contribuem com suas habilidades e conhecimentos únicos para um objetivo comum.
                    </p>
                </div>
                <div>
                    <h2 className='sobre_container_caption_add'>Compromisso com o Cliente</h2>
                    <p>
                        Colocamos o cliente no centro de tudo o que fazemos. Estamos dedicados a entender suas necessidades e fornecer soluções personalizadas que atendam aos seus objetivos e expectativas.
                    </p>
                </div>
                <div>
                    <h2 className='sobre_container_caption_add'>Transparência e Ética</h2>
                    <p>Operamos com integridade e transparência em todas as nossas interações. Mantemos altos padrões éticos e agimos com honestidade e respeito em todas as situações.
                    </p>
                </div>
                <p className='sobre_container_finalParagraph'>Estes valores e missões são mais do que simples palavras - são a essência do que somos como empresa junior e a base sobre a qual construímos relacionamentos duradouros e bem-sucedidos com nossos clientes e parceiros.</p>


            </section>
            <section className='doubts_container'>
                <h1 className='doubts_container_title'>Ficou em dúvida sobre algo?</h1>
                <h2 className='doubts_container_caption'>Vamos conversar sobre!</h2>
                <Link to='/#contacts' >Entrar em contato</Link>
            </section>
        </main>
    )
}

export default BannerMissionsValues